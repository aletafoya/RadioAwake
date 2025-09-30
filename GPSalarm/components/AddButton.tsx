// Botón para añadir una nueva alarma
import { Pressable } from "react-native"
import { AddIcon } from "./icons"
import { useNavigation } from "@react-navigation/native"
import type { RootStackParamList } from "../screens/RootStackParamList"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'CreateNewAlarm'>;

export default function AddButton() {
    const navigation = useNavigation<NavigationProp>();

    return (
        <Pressable className="rounded-[10] bg-white mb-5" onPress={() => navigation.navigate("CreateNewAlarm")}>
            <AddIcon size={45}></AddIcon>
        </Pressable>
    )
}