import Reatc from "react";
import { View, Text, TextInput } from "react-native";

type NameOfAlarmProp = {
    title: string,
    description: string
}

export default function NameOfAlarm({title, description} : NameOfAlarmProp) {
    return (
        <View className="flex-column pb-4 w-1/2">
            <Text className="text-xl pr-3 color-[#ffffff]">{title}</Text>
            <Text className="color-[#757575]">{description}</Text>
        </View>
    );
}