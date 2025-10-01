import React, { use } from "react"
import { Button } from "react-native"
import { useNavigation } from "@react-navigation/native";
import type { RootStackParamList } from "../screens/RootStackParamList"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

type ButtonRingProps = {
    title: string,
    url: keyof RootStackParamList
}

export default function ButtonRing({title, url} : ButtonRingProps) {
    const navigation = useNavigation<NavigationProp>();
    return (
        <Button title={title} onPress={() => navigation.navigate(url)}/>      
    );
}