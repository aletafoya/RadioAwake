import { Pressable, Text } from "react-native"

// Componente para guardar el tono seleccionado

type SetToneProps = {
    onPress: () => void
}

export default function SetTone({ onPress } : SetToneProps) {
    return(
        <Pressable 
            onPress = {onPress}
            style={
                { 
                    backgroundColor: "#27C497",
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    width: 100,
                }
            }
        >
            <Text>Set Alarm</Text>
        </Pressable>
    )
}
