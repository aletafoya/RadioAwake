import { ScrollView, View } from "react-native"
import { useState, useEffect } from "react"
import GPScard from "../components/GPScard"
import LabelRing from "../components/LabelRing"
import CircleButton from "../components/CircleButton"
import SetAlarm from "../components/SetAlarm"
import ScrollDistance from "../components/ScrollDistance"
import SwitchButton from "../components/SwitchButton"
import ButtonRing from "../components/ButtonRing"
import type { RootStackParamList } from "../screens/RootStackParamList"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

async function appendData(newData: any) {
    const existingData = await AsyncStorage.getItem("alarms");
    const data = existingData ? JSON.parse(existingData) : [];
    data.push(newData);
    await AsyncStorage.setItem("alarms", JSON.stringify(data));
}

// Pantalla para crear una nueva alarma GPS
export default function CreateNewAlarm() {
    const nav = useNavigation<NavigationProp>();
    const [distance, setDistance] = useState("50");
    const [ringtone, setRingtone] = useState({id: "1", name: "Default"});
    const [coords, setCoords] = useState<{ latitude: number; longitude: number } | null>(
        {latitude: 19.4284844, longitude: -99.1276628})
    
    const route = useRoute();
    const value = route.params as {ringtone: {id: string, name: string}} | undefined;

    useEffect(() => {
        if(value) {
            setRingtone(value.ringtone);
            alert(ringtone.name)
        }
    }, [value]);

    // Función para terminar y agregar una alarma
    const handlePress = () => {
        appendData({
            coords: coords,
            distance: distance,
            ringtone: ringtone,
            vibrate: true,
        })        
        //alert(filePath)
        nav.navigate("GPSalarm")
    }

    return (
        <View className="w-full h-full bg-background align-items-center justify-center">
            <View className="w-full h-4/6">
                <GPScard onChange={setCoords}/>
            </View>
            <ScrollView>
                <View className="items-center">
                    <ScrollDistance onChange={(val) => distance} />
                </View>
                <View className="gap-4 px-6">
                    <LabelRing title="Set Ringtone" description="Default">
                        <ButtonRing title="Default" url="SetRingtone"/>
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
                <SetAlarm onPress={handlePress}/>
            </View>
        </View>

    )
}