import RingtoneList from "../components/RingtoneList";
import SetTone from "../components/SetTone";
import { useState } from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function SetRingtone() {
    const [ringtone, setRingtone] = useState<{id: string, name: string}>({id: "1", name: "Default"});
    const route = useRoute();
    const link = route.params?.link as string; // Get the 'link' param
    
    const handlePress = (audio: {id: string, name: string}) => {
        setRingtone(audio);
    };
    
    return(
        <View className="w-full h-full bg-[#222423]">
            <RingtoneList onChange={handlePress}/>
            <SetTone url={link} ringtone={ringtone}/>
        </View>
    );
}
