import { View } from "react-native";
import { ScrollView } from "react-native";
import AddButton from "../components/AddButton";
import SaveCard from "../components/SaveCard";
import { useNavigation } from "@react-navigation/native";

export default function GPSalarm() {
    const navigation = useNavigation();
    
    return (
        <View className="w-full h-full justify-center items-center">
            <ScrollView className="w-full h-full" contentContainerStyle={ { alignItems: "center" } } >
                <SaveCard />
            </ScrollView>
            <AddButton/>
        </View>

    );
}
