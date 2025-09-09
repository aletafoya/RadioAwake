import { Button, View} from "react-native";
import ScrollTime from "../../components/scrollTime";
import { blue } from "react-native-reanimated/lib/typescript/Colors";
const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, "0"));
hours.push("");
const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));
minutes.push("");
const seconds = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));
seconds.push("");

export default function Timer() {
  return (
    <View>
      <View className="p-4 flex-row justify-around">
          <ScrollTime data={hours} name={"Hours"} />
          <ScrollTime data={minutes} name={"Minutes"}/>
          <ScrollTime data={seconds} name={"Seconds"}/>
      </View>
      <View className="items-center gap-10 border-2 border-solid">
        <Button title="Ready" color="#27C497" />
      </View>
      <View className="items-center gap-10 border-2 border-solid"/>
        <Button title="Stop"/>
      <View/>
    </View>
  );
}
