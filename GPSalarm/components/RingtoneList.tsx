import { useState } from "react";
import { View, Text, FlatList } from "react-native";
import AudioCard from "./AudioCard";
import data from "../assets/tones.json";

export default function RingtoneList() {
    const [checked, setChecked] = useState('first');

    return (
        <View className="w-full h-full">
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {

                    return(
                        <AudioCard name="{item.name}" state={checked === (item.id.toString())} />
                    );
                }}
            />
        </View>
    );
}