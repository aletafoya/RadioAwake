import { StatusBar, View, Text, type ViewStyle, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ConfigIcon, BackIcon } from "./icons";
import { useNavigation } from "expo-router";

type CustomHeaderProps = {
    title: string,
    backgroundColor?: string,
    back: boolean
}

export default function CustomHeader({title, backgroundColor = "#222423", back} : CustomHeaderProps) {
    const navigation = useNavigation()
    return (
        <SafeAreaView
            edges={["top"]}
            className="bg-background"
        >
            <StatusBar 
                barStyle={"light-content"}
                backgroundColor={backgroundColor}
            />
            <View className="flex-row justify-between px-6 h-14 border-b-2 border-primary">
                <View className="flex-row items-center justify-center gap-2">
                    {back && (
                        <Pressable onPress={() => navigation.goBack()}>
                            <BackIcon />
                        </Pressable>

                    ) }
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