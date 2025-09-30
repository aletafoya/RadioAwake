import { useState } from "react";
import { View } from "react-native";
import ScrollTime from "../components/ScrollTime";
import LabelRing from "../components/LabelRing";
import ToggleCheck from "../components/ToggleCheck";
import ButtonRing from "../components/ButtonRing";
import CircleButton from "../components/CircleButton";

const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, "0"));
hours.push("");
const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));
minutes.push("");
const seconds = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));
seconds.push("");

export default function Timer() {
  const [hrs, setHours] = useState("00");
  const [mns, setMinutes] = useState("00");
  const [sec, setSeconds] = useState("00");

  return (
    <View className="items-center bg-[#222423] flex-1">
      <View className="p-4 pb-6 flex-row justify-around w-full">
          <ScrollTime data={hours} name={"Hours"} onChange={(val) => setHours(val)}/>
          <ScrollTime data={minutes} name={"Minutes"} onChange={(val) => setMinutes(val)}/>
          <ScrollTime data={seconds} name={"Seconds"} onChange={(val) => setSeconds(val)}/>
      </View>
      <View className="flex-row pt-6 pb-6">
        <LabelRing title="Set Ringtone" description="Default"/>
        <ButtonRing title="Default"/>
      </View>
      <View className="flex-row pt-6 pb-6">
        <LabelRing title="Vibrate" description=""/>
        <ToggleCheck/>
      </View>
      <CircleButton enabled={(parseInt(hrs) + parseInt(mns) + parseInt(sec)) > 0 ? true : false}/>
    </View>
  );
}
