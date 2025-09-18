import React from "react"
import { TouchableOpacity, View, Text } from "react-native"

type RadioButtonProps = {
  state: boolean;
  onPress: () => void; 
};

export default function RadioButton({ state, onPress }: RadioButtonProps) {
  return (
    <TouchableOpacity
      className="h-10 w-10 p-3 rounded-full border-2 border-[#757575]"
      onPress={onPress}
    >
      <View
        className="h-3 w-3 rounded-full m-auto"
        style={{
          backgroundColor: state ? "rgba(68, 91, 149, 0.5)" : "#ffffff",
        }}
      />
    </TouchableOpacity>
  );
}