import { Pressable, Text } from "react-native"
import type { RootStackParamList } from "../screens/RootStackParamList"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
// Componente para guardar el tono seleccionado

type SetToneProps = {
    url: keyof RootStackParamList
}

export default function SetTone({ url }: SetToneProps) {
    const nav = useNavigation<NavigationProp>();

    return(
        <Pressable
            onPress = {() => nav.navigate(url)}
            style={
                { 
                    backgroundColor: "#27C497",
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    width: 100,
                }
            }
        >
            <Text>Set Alarm</Text>
        </Pressable>
    )
}
