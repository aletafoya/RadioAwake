import { Pressable } from "react-native";
import { RootStackParamList } from "../screens/RootStackParamList";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useNavigation } from "expo-router";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>

type FloatingButtonProps = {
    bgColor: string,
    children: React.ReactNode
    url: keyof RootStackParamList
}

export default function FloatingButton({ bgColor, children, url } : FloatingButtonProps) {
    const navigation = useNavigation<NavigationProp>()
    return(
        <Pressable 
            className="absolute bottom-6 right-6 p-3 rounded-2xl shadow-black shadow-xl"
            style={{backgroundColor: bgColor}}
            onPress={() => navigation.navigate(url)}
        >
            {children}
        </Pressable>
    )
}