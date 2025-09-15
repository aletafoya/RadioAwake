import { Text, View } from "react-native";
import SwitchButton from "./SwitchButton";

export default function TimeAlarmCard() {
    return(
        <View className="border-secondaryText border-2 rounded-xl pr-5 pl-5 pt-7 pb-7 gap-2">
            <View className="flex-row justify-between items-center">
                <View className="flex-row items-end gap-1">
                    <Text className="font-semibold text-5xl text-mainText">06:00</Text>
                    <Text className="font-semibold text-sm text-mainText">AM</Text>
                </View>
                <SwitchButton trackWidth={50} trackHeight={25} trackColors={{on:'#27C497', off:'#757575'}} />

            </View>
            <View>
                <Text className="text-base text-secondaryText">Mon, Tue, Wed, Thu, Fri</Text>
            </View>
        </View>
    )
}