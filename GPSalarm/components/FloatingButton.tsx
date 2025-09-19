import { Pressable } from "react-native";

type FloatingButtonProps = {
    bgColor: string,
    children: React.ReactNode
}

export default function FloatingButton({ bgColor, children } : FloatingButtonProps) {
    return(
        <Pressable 
            className="absolute bottom-6 right-6 p-3 rounded-2xl shadow-black shadow-xl"
            style={{backgroundColor: bgColor}}
        >
            {children}
        </Pressable>
    )
}