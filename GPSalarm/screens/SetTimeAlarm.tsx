import { Text, View } from "react-native";
import CustomHeader from "../components/CustomHeader";

export default function SetTimeAlarm() {
    return (
        <View className="flex-1 bg-background">
            <CustomHeader title={"Set alarm"} back={true}/>
            <Text className="text-mainText">SetTimeAlarm</Text>
        </View>
    )
}