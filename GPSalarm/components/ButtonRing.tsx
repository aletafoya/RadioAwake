import { Pressable, Text } from "react-native"
import { useNavigation } from "@react-navigation/native";
import type { RootStackParamList } from "../screens/RootStackParamList"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ViewStyle } from "react-native";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

// Solamente permitir rutas sin parámetros
type NoParamsRoutes = {
    [K in keyof RootStackParamList]: undefined extends RootStackParamList[K] ? K : never
}[keyof RootStackParamList];

type ButtonRingProps = {
    title: string,
    url: NoParamsRoutes,
    style?: ViewStyle,
    linkComingFrom: string,
}

export default function ButtonRing({ title, url, style, linkComingFrom }: ButtonRingProps) {
    const navigation = useNavigation<NavigationProp>();
    
    const handlePress = () => {
	navigation.navigate(url, {
	    link: linkComingFrom
	});
    };

    return (
        <Pressable
            onPress={handlePress}
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
