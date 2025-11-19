import { Pressable, Text } from "react-native"
import type { RootStackParamList } from "../screens/RootStackParamList"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useNavigation, useRoute } from "@react-navigation/native";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
// Componente para guardar el tono seleccionado

type SetToneProps = {
    url: keyof RootStackParamList,
    ringtone: {id: string, name: string} | undefined
}

export default function SetTone({ url, ringtone }: SetToneProps) {
    const nav = useNavigation<NavigationProp>();
    const route = useRoute();
    // Regresar a la pantalla anterior con el tono seleccionado
    const routeParams = route.params as { returnTo?: "CreateNewAlarm" | "Timer" } | undefined;
    const returnTo = routeParams?.returnTo;

    const returnTone = () => {
        const params = ringtone ? { ringtone } : undefined;
        if (returnTo === "CreateNewAlarm" || returnTo === "Timer") {
            nav.navigate({
                name: returnTo, params: params
            });
            return;
        }

        // Psar prop undefined
        nav.navigate(url, params as any);
    }

    return(
        <Pressable
            onPress = {() => returnTone()}
            style={
                { 
                    backgroundColor: "#27C497",
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    width: 100,
                }
            }
        >
            <Text>Set Tone</Text>
        </Pressable>
    )
}
