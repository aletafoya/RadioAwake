import { Pressable, Text } from "react-native"

type SetAlarmProp = {
    onPress: () => void
}

export default function SetAlarm({ onPress } : SetAlarmProp) {

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