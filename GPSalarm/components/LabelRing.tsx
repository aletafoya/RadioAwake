import Reatc from "react";
import { View, Text, TextInput } from "react-native";
import SwitchButton from "./SwitchButton";

type LabelRingProps = {
    title: string,
    description?: string,
    children?: React.ReactNode 
}

export default function LabelRing({title, description = "", children} : LabelRingProps) {
    return (
        <View className="flex-row justify-between items-center">
            <View className="flex-column">
                <Text className="text-xl color-[#ffffff]">{title}</Text>
                {description !== "" && <Text className="color-[#757575]">{description}</Text>}
            </View>
            {children}
        </View>
    );
}