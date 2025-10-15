import { Text, View } from "react-native";
import CustomHeader from "../components/CustomHeader";
import ScrollTime from "../components/ScrollTime";
import LabelRing from "../components/LabelRing";
import { useState } from "react";
import { Calendar, LocaleConfig } from 'react-native-calendars'
import SwitchButton from "../components/SwitchButton";

export default function SetTimeAlarm() {
    const hours = Array.from({ length: 12 }, (_, i) => i.toString().padStart(2, "0"));
    hours.push("");
    const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));
    minutes.push("");
    const [hrs, setHours] = useState("00")
    const [mins, setMinutes] = useState("00")

    return (
        <View className="flex-1 bg-background">
            <CustomHeader title={"Set alarm"} back={true} />
            <View className="flex-row justify-center items-center gap-10 mt-10">
                <ScrollTime data={hours} name={"Hours"} onChange={(val) => setHours(val)} />
                <Text className="text-mainText text-8xl">:</Text>
                <ScrollTime data={minutes} name={"Minutes"} onChange={(val) => setMinutes(val)} />
                <View className="gap-3">
                    <Text className="text-mainText text-3xl font-semibold">AM</Text>
                    <Text className="text-mainText text-3xl font-semibold">PM</Text>
                </View>
            </View>
            <View>
                <Calendar/>
            </View>
            <View className="gap-4 px-6">
                <LabelRing title="Vibrate">
                    <SwitchButton />
                </LabelRing>
                <LabelRing title="Snooze" description="5 min.">
                    <SwitchButton />
                </LabelRing>
                <LabelRing title="Alarm name" description="name"/>
                <LabelRing title="Mission" description="Math test"/>
            </View>
        </View>
    )
}