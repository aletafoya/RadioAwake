import { Pressable, Text } from "react-native"

export default function SetAlarm({ onPress } : { onPress: () => void }) {

    return (
        <Pressable 
            onPress = {onPress}
            style={
                { backgroundColor: "#27C497",
                  paddingHorizontal: 20,
                  paddingVertical: 10
                }
            }
        >
            <Text>Set Alarm</Text>
        </Pressable>
    )
}