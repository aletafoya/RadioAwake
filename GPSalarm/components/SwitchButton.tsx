// SwitchButton.tsx
import React from 'react';
import {
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
  LayoutChangeEvent,
} from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';

/* -------------------- Tipos -------------------- */
interface TrackColors {
  on?: string;
  off?: string;
}

export interface SwitchProps {
  value: SharedValue<number | boolean>;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  duration?: number;
  trackColors?: TrackColors;
  trackWidth?: number;
  trackHeight?: number;
  trackPadding?: number;
  thumbSize?: number;
}

/* -------------------- Componente Switch (core) -------------------- */
export const Switch: React.FC<SwitchProps> = ({
  value,
  onPress,
  style,
  duration = 400,
  trackColors = { on: '#82cab2', off: '#fa7f7c' },
  trackWidth,
  trackHeight,
  trackPadding,
  thumbSize,
}) => {
  const measuredHeight = useSharedValue(0);
  const measuredWidth = useSharedValue(0);

  const DEFAULTS = { width: 100, height: 40, padding: 1 };
  const presetWidth = trackWidth ?? DEFAULTS.width;
  const presetHeight = trackHeight ?? DEFAULTS.height;
  const presetPadding = trackPadding ?? DEFAULTS.padding;

  const presetStyle: ViewStyle = {
    width: presetWidth,
    height: presetHeight,
    padding: presetPadding,
  };

  const trackAnimatedStyle = useAnimatedStyle(() => {
    const numeric = Number(value.value);
    const color = interpolateColor(
      numeric,
      [0, 1],
      [trackColors.off ?? '#fa7f7c', trackColors.on ?? '#82cab2']
    );
    const colorValue = withTiming(color, { duration });
    return {
      backgroundColor: colorValue,
      borderRadius: measuredHeight.value / 2 || presetHeight / 2,
    };
  });

  const thumbAnimatedStyle = useAnimatedStyle(() => {
    const padding = presetPadding;
    const measuredH = measuredHeight.value || presetHeight;
    const measuredW = measuredWidth.value || presetWidth;
    const computedThumb = thumbSize ?? Math.max(0, measuredH - padding * 2);
    const innerWidth = Math.max(0, measuredW - padding * 2);
    const maxTranslate = Math.max(0, innerWidth - computedThumb);

    const numeric = Number(value.value);
    const moveValue = interpolate(numeric, [0, 1], [0, maxTranslate]);
    const translateValue = withTiming(moveValue, { duration });

    return {
      transform: [{ translateX: translateValue }],
      borderRadius: computedThumb / 2,
    };
  });

  const handleLayout = (e: LayoutChangeEvent) => {
    const { height, width } = e.nativeEvent.layout;
    measuredHeight.value = height;
    measuredWidth.value = width;
  };

  const computedThumbStyle = (): ViewStyle => {
    if (thumbSize) {
      return { width: thumbSize, height: thumbSize };
    } else {
      return { height: '100%', aspectRatio: 1 };
    }
  };

  return (
    <Pressable onPress={onPress}>
      <Animated.View
        onLayout={handleLayout}
        style={[switchStyles.track, presetStyle, style, trackAnimatedStyle]}>
        <Animated.View style={[switchStyles.thumb, computedThumbStyle(), thumbAnimatedStyle]} />
      </Animated.View>
    </Pressable>
  );
};

const switchStyles = StyleSheet.create({
  track: {
    alignItems: 'flex-start',
    width: 100,
    height: 40,
    padding: 1,
  },
  thumb: {
    backgroundColor: 'white',
  },
});

/* ------------- Wrapper: SwitchButton (export default) ------------- */
/**
 * Wrapper que permite usar <SwitchButton /> sin pasar props obligatorias.
 * Acepta props opcionales para configuración rápida.
 */
interface SwitchButtonProps {
  initial?: boolean;
  // Overrides opcionales que se pasaran al Switch interno
  trackWidth?: number;
  onChange?: (value: Boolean) => void;
  trackHeight?: number;
  trackPadding?: number;
  thumbSize?: number;
  trackColors?: TrackColors;
  duration?: number;
  style?: StyleProp<ViewStyle>;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({
  initial = false,
  onChange,
  trackWidth = 50,
  trackHeight = 25,
  trackPadding,
  thumbSize,
  trackColors = {on:'#27C497', off:'#757575'},
  duration,
  style,
}) => {
  const isOn = useSharedValue<boolean | number>(initial);

  const toggle = () => {
    isOn.value = !isOn.value;
    onChange?.(!!isOn.value);
  };

  return (
    <Switch
      value={isOn}
      onPress={toggle}
      trackWidth={trackWidth}
      trackHeight={trackHeight}
      trackPadding={trackPadding}
      thumbSize={thumbSize}
      trackColors={trackColors}
      duration={duration}
      style={style}
    />
  );
};

export default SwitchButton;
