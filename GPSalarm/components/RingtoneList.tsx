import { useState } from "react"
import { View, FlatList } from "react-native"
import AudioCard from "./AudioCard"
import data from "../assets/tones.json"

type RingtoneListProp = {
    onChange: (audio: {id: string, name: string}) => void
}

export default function RingtoneList({ onChange } : RingtoneListProp) {
    const tones = data.tones
    const [checked, setChecked] = useState<string>(tones[0].id.toString()) // Qué tono está seleccionado

    const handlePress = (id: string, name: string) => {
        onChange({id: id, name: name})
    }

    return (
        <View className="w-full h-4/5 bg-[#222423] pt-20">
            <FlatList
                data={tones}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return(
                        <AudioCard name={item.name} state={checked === (item.id.toString())}
                        onSelect={() => setChecked(item.id.toString())}
                        onChange={() => handlePress(item.id.toString(), item.name)}
                        />
                    );                    
                }
            }
            />
        </View>
    );
}