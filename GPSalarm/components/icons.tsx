import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ComponentProps } from 'react';

type RawIconProps = ComponentProps<typeof MaterialCommunityIcons>;
type IconProps = Omit<RawIconProps, 'name'>

export const HomeIcon = (props: IconProps) => (
    <MaterialCommunityIcons {...props} name="home" size={24} color="black"/>
)