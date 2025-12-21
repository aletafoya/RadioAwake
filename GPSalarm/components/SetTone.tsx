import { Pressable, Text } from "react-native"
import type { RootStackParamList } from "../screens/RootStackParamList"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useNavigation } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

type SetToneProps = {
    url: string,
    ringtone?: { id: string; name: string }
}

export default function SetTone({ url, ringtone }: SetToneProps) {
    const nav = useNavigation<NavigationProp>();
    
    const returnTone = () => {
        nav.navigate(url as any, ringtone); // Pass screen name first, then params
    };
    
    return (
        <Pressable
            onPress={returnTone}
            style={{
                backgroundColor: "#27C497",
                paddingHorizontal: 20,
                paddingVertical: 10,
                width: 100,
            }}
        >
            <Text>Set Tone</Text>
        </Pressable>
    );
}
