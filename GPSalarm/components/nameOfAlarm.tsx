import Reatc from "react";
import { View, Text, TextInput } from "react-native";

export default function NameOfAlarm() {
    return (
        <View className="flex-row pb-4 w-1/2">
            <Text className="text-xl pr-3">Name</Text>
            <TextInput className="border-2 border-solid rounded-lg p-2 w-full" placeholder="Alarm Name" placeholderTextColor="gray"/>
        </View>
    );
}