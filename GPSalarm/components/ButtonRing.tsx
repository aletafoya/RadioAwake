import { Pressable, Text } from "react-native"
import { useNavigation } from "@react-navigation/native";
import type { RootStackParamList } from "../screens/RootStackParamList"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ViewStyle } from "react-native";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

type ButtonRingProps = {
    title: string,
    url: keyof RootStackParamList,
    style?: ViewStyle
}

export default function ButtonRing({ title, url, style }: ButtonRingProps) {
    const navigation = useNavigation<NavigationProp>();
    return (
        <Pressable
            onPress={() => navigation.navigate(url)}
            style={{
                backgroundColor: "#27C497",
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 5,
                ...style,
            }}
        >
            <Text className="text-mainText font-semibold text-center">{title}</Text>
        </Pressable>
    );
}