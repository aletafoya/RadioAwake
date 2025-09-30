import { View, FlatList, Text } from "react-native";
import { useState } from "react";

const distance = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
const ITEM_WIDTH = 100;

type ScrollDistanceProps = {
    onChange: (value: number) => void;
};

export default function ScrollDistance({ onChange } : ScrollDistanceProps) {
    const [selectedDistance, setSelectedDistance] = useState(100);

    const onScroll = (event: any) => { // Función para saber qué indice está en focus
        const xOffset = event.nativeEvent.contentOffset.x;
        const index = Math.round(xOffset / ITEM_WIDTH);

        onChange(distance[index]);
        setSelectedDistance(index);
    }

    return (
        <View className="h-40 pl-4 justify-center items-center" style={{width: ITEM_WIDTH * 3, overflow: "hidden"}}>
            <FlatList
                data={distance}
                horizontal
                showsHorizontalScrollIndicator={false}
                decelerationRate={"fast"}
                onScroll={onScroll}
                bounces={false}
                scrollEventThrottle={16}
                keyExtractor={(item) => item.toString()}
                renderItem={({item, index}) => {
                    const opacity = index === selectedDistance ? 1 : 0.3;
                    return(
                        <View className="w-24 justify-center items-center pl-4">
                            <Text style={{ fontSize: 20, opacity , color:"white"}}>{item}</Text>
                        </View>
                )}}
                >
            </FlatList>
            <Text className="pb-4" style={{color:"white"}}>Meters</Text>
        </View>
        
    )
}