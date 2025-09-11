import React from "react";
import { View, Text, Button } from "react-native";

export default function Vibrate() {
    return (
        <View className="flex-row w-1/2 pb-4">
            <View className="pl-2 pr-2 pb-6 border-solid border-2">
                <Text className="text-xl">Vibrate</Text>
            </View>
            <View className="pl-2 pr-2 pb-6 items-end border-solid border-2">
                <Button title="ok"/>
            </View>
        </View>
    );
}