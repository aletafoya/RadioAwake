import { HomeIcon } from "../components/icons";
import "../global.css"
import { Text, View } from "react-native";
 
export default function Layout() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <HomeIcon style={{opacity: 0.5}}/>
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}