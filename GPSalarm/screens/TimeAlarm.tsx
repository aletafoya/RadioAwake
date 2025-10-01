import { View, ScrollView } from "react-native";
import TimeAlarmCard from "../components/TimeAlarmCard";
import FloatingButton from "../components/FloatingButton";
import { AddIcon } from "../components/icons";

export default function TimeAlarm() {
    return (
        <View className="flex-1 bg-background">
            <ScrollView
                className="pt-7 pb-7 pr-4 pl-4"
                contentContainerStyle={{
                    rowGap: 28
                }}>
                <TimeAlarmCard />
                <TimeAlarmCard />
                <TimeAlarmCard />
                <TimeAlarmCard />
                <TimeAlarmCard />
                <TimeAlarmCard />
                <TimeAlarmCard />
            </ScrollView>
            <FloatingButton bgColor="#27C497" url="SetTimeAlarm">
                <AddIcon size={40} color={"#222423"}/>
            </FloatingButton>
        </View>

    )
}