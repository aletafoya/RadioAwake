import { colorScheme } from "nativewind";
import React, { useRef, useState } from "react";
import { FlatList, Text, View } from "react-native";

const ITEM_HEIGHT = 60;

type ScrollTimeProps = {
  data: string[];
  name: string;
};

export default function ScrollTime({ data, name } : ScrollTimeProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onScroll = (event: any) => { // Función para saber qué indice está en focus
    const yOffset = event.nativeEvent.contentOffset.y;
    const index = Math.round(yOffset / ITEM_HEIGHT);
    setSelectedIndex(index);
  };

  return (
    <View style={{ height: ITEM_HEIGHT * 3, overflow: "hidden"}}>
      <FlatList
        data={data}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        onScroll={onScroll}
        scrollEventThrottle={16}
        bounces={false}
        renderItem={({ item, index }) => {
          // const scale = index === selectedIndex ? 1.2 : 1; cambia de tamaño para el elemento en focus
          const opacity = index === selectedIndex ? 1 : 0.3; 
          return (
            <View style={{ height: ITEM_HEIGHT, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 50, opacity , color:"white"}}>{item}</Text>
            </View>
          );
        }}
      />
      <Text className="pt-4 text-center" style={{color:"white"}}>{name}</Text>
    </View>
  );
}
