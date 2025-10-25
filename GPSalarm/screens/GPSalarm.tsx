// Pantalla que renderiza las alarmas GPS
import { View } from "react-native";
import { ScrollView } from "react-native";
import SaveCard from "../components/GPSAlarmCard";
import FloatingButton from "../components/FloatingButton";
import { AddIcon } from "../components/icons";

export default function GPSalarm() {
    
    return (
        <View className="w-full h-full justify-center items-center bg-[#222423]">
            <ScrollView className="w-full h-full" contentContainerStyle={ { alignItems: "center" } } >
                <SaveCard name="Stop" location="Near" radius={2}/>
            </ScrollView>
            <FloatingButton bgColor="#27C497" url="CreateNewAlarm">
                <AddIcon size={40} color={"#222423"}/>
            </FloatingButton>
        </View>

    );
}
