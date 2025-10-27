import { ScrollView, View } from "react-native"
import { use, useState } from "react"
import GPScard from "../components/GPScard"
import LabelRing from "../components/LabelRing"
import CircleButton from "../components/CircleButton"
import SetAlarm from "../components/SetAlarm"
import ScrollDistance from "../components/ScrollDistance"
import SwitchButton from "../components/SwitchButton"
import ButtonRing from "../components/ButtonRing"
import type { RootStackParamList } from "../screens/RootStackParamList"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native";
//import RNFS from 'react-native-fs'; // File system para leer y escribir archivos

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
//const filePath = RNFS.DocumentDirectoryPath + 'gpsAlarms.json';
/*
const appendToGPS = async (data: any) => {
    try {
        const fileContent = await RNFS.readFile(filePath, 'utf8');
    
        let dataArray;
        if (fileContent) {
            dataArray = JSON.parse(fileContent);
        } else {
            dataArray = [];
        }

        if (!Array.isArray(dataArray)) {
            console.error("JSON content does not match");
            dataArray = []; 
        }

        dataArray.push(data);

        const updatedJsonString = JSON.stringify(dataArray, null, 2); 

        await RNFS.writeFile(filePath, updatedJsonString, 'utf8');
        
        console.log('Success');
    } catch (error) {
        console.log(error)
    }
}*/

// Pantalla para crear una nueva alarma GPS
export default function CreateNewAlarm() {
    const nav = useNavigation<NavigationProp>();
    const [distance, setDistance] = useState("50");
    const [coords, setCoords] = useState<{ latitude: number; longitude: number } | null>(
        {latitude: 19.4284844, longitude: -99.1276628})
    
    // Función para terminar y agregar una alarma
    const handlePress = () => {
        
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
                <SetAlarm onPress={handlePress}/>
            </View>
        </View>

    )
}