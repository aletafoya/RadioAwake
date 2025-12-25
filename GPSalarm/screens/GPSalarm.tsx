import { View } from "react-native";
import { FlatList } from "react-native";
import GPSAlarmCard from "../components/GPSAlarmCard";
import FloatingButton from "../components/FloatingButton";
import { useState, useEffect} from "react";
import { AddIcon } from "../components/icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

async function getAlarms() {
    try {
        const data = await AsyncStorage.getItem("gpsAlarms");
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error("Error reading alarms:", error);
        return [];
    }
}

type Alarm = {
    id: string, 
    name: string,
    coords: {
	altitude: number,
	latitude: number
    },
    distance: number,
    ringtone: string,
    ringtoneId: string,
    vibrate: Boolean,
    snooze: Boolean
}

export default function GPSalarm() {
    const [alarms, setAlarms] = useState<Alarm[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
	loadAlarms();
    }, []);

    const loadAlarms = async () => {
	setLoading(true);
	const data = await getAlarms();
	setAlarms(data);
	setLoading(false);
    };

    return (
        <View className="w-full h-full justify-center items-center bg-[#222423]">
            <FlatList data={alarms}
		keyExtractor={(item) => item.id}
	        showsVerticalScrollIndicator={false}
	        decelerationRate="fast"
		scrollEventThrottle={16}
		bounces={false}
		contentContainerStyle={{padding: 16}}
		renderItem={({ item }) => { 
		    return(
			<GPSAlarmCard name={item.name} location={item.coords} radius={item.distance}/>
		    )
		}}
	    />
	    <FloatingButton bgColor="#27C497" url="CreateNewAlarm">
                <AddIcon size={40} color={"#222423"}/>
            </FloatingButton>
        </View>

    );
}

