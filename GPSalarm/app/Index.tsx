import "../global.css"
import { useState } from "react"
import { TabBar, TabView, SceneMap } from "react-native-tab-view";
import { Text, View, useWindowDimensions } from "react-native";
 
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold text-blue-500">
        GpsAlarm
      </Text>
    </View>
  );
}