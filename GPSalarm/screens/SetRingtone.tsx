import RingtoneList from "../components/RingtoneList";
import SetTone from "../components/SetTone";
import { useState } from "react";
import { View } from "react-native";
import type { RootStackParamList } from "../screens/RootStackParamList"

type SetRingtoneProp = {
    link: keyof RootStackParamList,
}

export default function SetRingtone({ link }: SetRingtoneProp) {
    const [ringtone, setRingtone] = useState<{id: string, name: string}>({id: "1", name: "Default"});

    const handlePress = (audio: {id: string, name: string}) => {
        setRingtone(audio);
    }

    return(
        <View className="w-full h-full bg-[#222423]">
            <RingtoneList onChange={setRingtone}/>
            <SetTone url={link}/>
        </View>
    )
}