import { View } from "react-native"
import { AddIcon } from "./icons"
import { useRouter } from "expo-router"


export default function AddButton() {
    const router = useRouter();

    return (
        <View className="rounded-[10] bg-white mb-5">
            <AddIcon size={45} onPress={() => router.navigate('/GPScard')}></AddIcon>
        </View>
    )
}