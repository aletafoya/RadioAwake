import { StatusBar, View, Text, type ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ConfigIcon } from "./icons";

type CustomHeaderProps = {
    title: string,
    backgroundColor?: string,
}

export default function CustomHeader({title, backgroundColor = "#222423"} : CustomHeaderProps) {
    return (
        <SafeAreaView
            edges={["top"]}
            className="bg-background"
        >
            <StatusBar 
                barStyle={"light-content"}
                backgroundColor={backgroundColor}
            />
            <View className="flex-row justify-between px-8 h-14 border-b-2 border-primary">
                <View className="items-center justify-center">
                    <Text numberOfLines={1} className="text-xl font-semibold color-mainText">
                        {title}
                    </Text>
                </View>
                <View className="items-center justify-center">
                    <ConfigIcon size={24} color={"#FFFFFF"}/>
                </View>
            </View>
        </SafeAreaView>
    )
}