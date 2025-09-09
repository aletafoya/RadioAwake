import React, { useRef, useState } from "react";
import { FlatList, Text, View } from "react-native";

const ITEM_HEIGHT = 60;

type ScrollTimeProps = {
  data: string[];
  name: string;
};

export default function ScrollTime({ data, name } : ScrollTimeProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onScroll = (event: any) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    const index = Math.round(yOffset / ITEM_HEIGHT);
    setSelectedIndex(index);
  };

  return (
    <View style={{ height: ITEM_HEIGHT * 3, overflow: "hidden" }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          const scale = index === selectedIndex ? 1.2 : 1; 
          const opacity = index === selectedIndex ? 1 : 0.3; 
          return (
            <View style={{ height: ITEM_HEIGHT, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 24 * scale, opacity }}>{item}</Text>
            </View>
          );
        }}
      />
      <Text className="pt-4">{name}</Text>
    </View>
  );
}
