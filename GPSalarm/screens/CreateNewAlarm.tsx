import { ScrollView, View } from "react-native"
import { useState } from "react"
import GPScard from "../components/GPScard"
import LabelRing from "../components/LabelRing"
import CircleButton from "../components/CircleButton"
import ButtonRing from "../components/ButtonRing"
import ScrollDistance from "../components/ScrollDistance"
import SwitchButton from "../components/SwitchButton"

export default function CreateNewAlarm() {
    const [distance, setDistance] = useState("50");
    return (
        <View className="w-full h-full bg-background align-items-center justify-center">
            <View className="w-full h-4/6">
                <GPScard />
            </View>
            <ScrollView>
                <View className="items-center">
                    <ScrollDistance onChange={(val) => distance} />
                </View>
                <View className="gap-4 px-6">
                    <LabelRing title="Set Ringtone" description="Default">
                        <ButtonRing title="Default" url="SetRingtone" />
                    </LabelRing>
                    <LabelRing title="Vibrate" description="">
                        <SwitchButton />
                    </LabelRing>
                </View>
                <View className="items-center">
                    <CircleButton enabled={true} />
                </View>
            </ScrollView>
            <View className="absolute bottom-0 w-full items-center py-4 bg-[#222423d7]">
                <ButtonRing title="Set alarm" url="CreateNewAlarm" style={{ width: "80%", paddingVertical: 10 }} />
            </View>
        </View>

    )
}