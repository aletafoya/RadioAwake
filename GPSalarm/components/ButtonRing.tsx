import React, { use } from "react"
import { Button } from "react-native"
import { useNavigation } from "@react-navigation/native";
import type { RootStackParamList } from "../screens/RootStackParamList"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SetRingtone'>;

type ButtonRingProps = {
    title: string
}

export default function ButtonRing({title} : ButtonRingProps) {
    const navigation = useNavigation<NavigationProp>();
    return (
        <Button title={title} onPress={() => navigation.navigate("SetRingtone")}/>      
    );
}