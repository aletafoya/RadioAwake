import { PlayIcon } from "./icons";
import { View } from "react-native"

export default function CircleButton() {
    return(
        <View className="bg-[#ffffff] rounded-full p-3">
            <PlayIcon size={45}></PlayIcon>        
        </View>
    );
}