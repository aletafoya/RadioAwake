import RingtoneList from "../components/RingtoneList";
import SetTone from "../components/SetTone";
import { useState } from "react";
import { View } from "react-native";

export default function SetRingtone() {
    const [ringtone, setRingtone] = useState<{id: string; name: string } | null>({id: "1", name: "Retro Machine"});

    return(
        <View className="w-full h-full bg-[#222423]">
            <RingtoneList onChange={setRingtone}/>
            <SetTone onPress={() => alert(`Ringtone set to: ${ringtone?.name}`)} />
        </View>
    )
}