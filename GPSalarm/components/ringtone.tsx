import React from "react";
import { View, Text } from "react-native";

export default function Ringtone() {
    return (
        <View className="flex-row w-1/2 pb-4">
            <View className="pl-2 pr-2 pb-6 border-solid border-2">
                <Text className="text-xl">Set Ringtone</Text>
            </View>
            <View className="w-3/10 pl-2 pr-2 pb-6 items-end border-solid border-2">
                <Text className="text-xl" style={{color:"#27C497"}}>Default</Text>
            </View>
        </View>
    );
}