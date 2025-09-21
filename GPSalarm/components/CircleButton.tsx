import { PlayIcon } from "./icons";
import { View } from "react-native"

type CircleButtonProps = {
    enabled: boolean
}

export default function CircleButton( { enabled } : CircleButtonProps ) {
    return(
        <View className="rounded-full p-3" style={ {backgroundColor: enabled ? "#ffffff" : "#6b6666ff"} }>
            <PlayIcon size={45}></PlayIcon>        
        </View>
    );
}