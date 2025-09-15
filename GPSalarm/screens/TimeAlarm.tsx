import { View, Text, ScrollView } from "react-native";
import TimeAlarmCard from "../components/TimeAlarmCard";

export default function TimeAlarm() {
    return (
        <ScrollView
            className="flex-1 bg-background pt-7 pb-7 pr-4 pl-4"
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
    )
}