import { useState } from "react"
import { View, FlatList } from "react-native"
import AudioCard from "./AudioCard"
import data from "../assets/tones.json"

export default function RingtoneList() {
    const tones = data.tones
    const [checked, setChecked] = useState<string>(tones[0].id.toString()) // Qué tono está seleccionado

    return (
        <View className="w-full h-full bg-[#222423] pt-20">
            <FlatList
                data={tones}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return(
                        <AudioCard name={item.name} state={checked === (item.id.toString())}
                        onSelect={() => setChecked(item.id.toString())}/>
                    );
                }}
            />
        </View>
    );
}