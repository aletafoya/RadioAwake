import { Pressable, Text } from "react-native"
import { useNavigation } from "@react-navigation/native";
import type { RootStackParamList } from "../screens/RootStackParamList"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ViewStyle } from "react-native";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

type ButtonUrlProps = {
    title: string,
    url: keyof RootStackParamList,
    style?: ViewStyle,
    onPress?: () => void
}

export default function ButtonUrl({ title, url, style }: ButtonUrlProps) {
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