import { Button, View } from "react-native";
import ScrollTime from "../../components/ScrollTime";
import RingtoneList from "../../components/RingtoneList";
import LabelRing from "../../components/LabelRing";
import ToggleCheck from "../../components/ToggleCheck";
import ButtonRing from "../../components/ButtonRing";
import CircleButton from "../../components/CircleButton";

const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, "0"));
hours.push("");
const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));
minutes.push("");
const seconds = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));
seconds.push("");

export default function Timer() {
  return (
    <View className="items-center">
      <View className="p-4 pb-6 flex-row justify-around w-full">
          <ScrollTime data={hours} name={"Hours"} />
          <ScrollTime data={minutes} name={"Minutes"}/>
          <ScrollTime data={seconds} name={"Seconds"}/>
      </View>
      <View className="flex-row">
        <LabelRing title="Set Ringtone" description="Default"/>
        <ButtonRing title="Default"/>
      </View>
      <View className="flex-row">
        <LabelRing title="Vibrate" description=""/>
        <ToggleCheck/>
      </View>
      <CircleButton/>
    </View>
  );
}
