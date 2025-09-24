import { View } from "react-native";
import { ScrollView } from "react-native";
import AddButton from "../components/AddButton";
import SaveCard from "../components/SaveCard";

export default function GPSalarm() {
    return (
        <View className="w-full h-full justify-center items-center">
            <ScrollView className="w-full h-full" contentContainerStyle={ { alignItems: "center" } } >
                <SaveCard />
            </ScrollView>
            <AddButton/>
        </View>        
    );
}
