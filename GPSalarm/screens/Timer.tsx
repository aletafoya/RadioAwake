import { useState } from "react";
import { View } from "react-native";
import ScrollTime from "../components/ScrollTime";
import LabelRing from "../components/LabelRing";
import ButtonRing from "../components/ButtonRing";
import CircleButton from "../components/CircleButton";
import SwitchButton from "../components/SwitchButton";

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
    <View className="bg-[#222423] flex-1">
      <View className="p-4 pb-6 flex-row justify-around w-full">
        <ScrollTime data={hours} name={"Hours"} onChange={(val) => setHours(val)} />
        <ScrollTime data={minutes} name={"Minutes"} onChange={(val) => setMinutes(val)} />
        <ScrollTime data={seconds} name={"Seconds"} onChange={(val) => setSeconds(val)} />
      </View>
      <View className="gap-4 px-6">
        <LabelRing title="Set Ringtone" description="Default">
          <ButtonRing title="Default" url="SetRingtone" />
        </LabelRing>
        <LabelRing title="Vibrate" description="">
          <SwitchButton />
        </LabelRing>
      </View>
      <View className="items-center">
        <CircleButton enabled={(parseInt(hrs) + parseInt(mns) + parseInt(sec)) > 0 ? true : false} />
      </View>
    </View>
  );
}
