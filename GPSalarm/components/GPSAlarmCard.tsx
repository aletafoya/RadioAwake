import React from "react"
import { View, Text } from "react-native"
import SwitchButton from "./SwitchButton"

type GPSAlarmCardProps = {
    name: string,
    location: string,
    radius: number
}

export default function GPSAlarmCard({ location, radius, name } : GPSAlarmCardProps) {
    return (
        <View className="w-[80%] rounded-[10px] bg-white pb-2 pt-7 mt-5 flex-row">
            <View className="pl-5 pr-5">
                <Text className="text-5xl pb-2">{name}</Text>
                <Text className="text-sm">{location}</Text>
                <Text className="text-sm">Radius: {radius} km</Text>
            </View>
            <SwitchButton trackWidth={50} trackHeight={25} trackColors={{on:'#27C497', off:'#757575'}}/>
        </View>
    );
}
