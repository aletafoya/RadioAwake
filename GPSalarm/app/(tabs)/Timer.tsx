import { Button, View } from "react-native";
import ScrollTime from "../../components/scrollTime";
import Ringtone from "../../components/ringtone";
import Vibrate from "../../components/vibrate";
import NameOfAlarm from "../../components/nameOfAlarm";

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
      <Ringtone />
      <Vibrate />
      <NameOfAlarm />
      <View className="border-2 border-solid rounded-lg w-1/2">
        <Button title="Ready" color="#27C497" />
      </View>

    </View>
  );
}
