import { ScrollView, View } from "react-native"
import { useState } from "react"
import GPScard from "../components/GPScard"
import LabelRing from "../components/LabelRing"
import ToggleCheck from "../components/ToggleCheck"
import CircleButton from "../components/CircleButton"
import ButtonRing from "../components/ButtonRing"
import ScrollDistance from "../components/ScrollDistance"

export default function CreateNewAlarm() {
    const [distance, setDistance] = useState("50");
    return (
        <View className="w-full h-full align-items-center justify-center bg-[#222423]">
            <ScrollView contentContainerStyle={{alignItems:"center"}}>
                    <View className="w-full h-full">
                        <GPScard/>
                    </View>
                    <ScrollDistance onChange={(val) => setDistance(val.toString())}/>
                    <View className="flex-row mt-4">
                        <LabelRing title="Set Ringtone" description="Default"/>
                        <ButtonRing title="Default" url="SetRingtone"/>
                    </View>
                    <View className="flex-row mt-4">
                        <LabelRing title="Vibrate" description=""/>
                        <ToggleCheck/>
                    </View>
                    <CircleButton enabled={true}/>
                </ScrollView>
            </View>
        
    )
}