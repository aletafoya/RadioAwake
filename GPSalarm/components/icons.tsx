import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ComponentProps } from 'react';

type RawIconProps = ComponentProps<typeof MaterialCommunityIcons>;
type IconProps = Omit<RawIconProps, 'name'>

export const HomeIcon = (props: IconProps) => (
    <MaterialCommunityIcons name="home" size={30} color="#27C497" {...props}/>
)

export const MapMarkerIcon = (props: IconProps) => (
    <MaterialCommunityIcons name="map-marker" size={30} color="#27C497" {...props} />
)

export const TimerSandIcon = (props: IconProps) => (
    <MaterialCommunityIcons name="timer-sand-empty" size={30} color="#27C497" {...props}/>
)

export const TimerOutlineIcon = (props: IconProps) => (
    <MaterialCommunityIcons name="timer-outline" size={30} color="#27C497" {...props}/>
)

export const AlarmIcon = (props: IconProps) => (
    <MaterialCommunityIcons name="alarm" size={30} color="#27C497" {...props} />
)

export const ClockIcon = (props: IconProps) => (
    <MaterialCommunityIcons name="clock-time-eight-outline" size={30} color="#27C497" {...props} />
)