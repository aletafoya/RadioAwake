import "./global.css";
import GPSalarm from "./screens/GPSalarm";
import Layout from "./screens/Layout";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { RootStackParamList } from "./screens/RootStackParamList";
import CreateNewAlarm from "./screens/CreateNewAlarm";
import WorldClock from "./screens/WorldClock";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Layout">
            <Stack.Screen name="Layout" component={Layout}/>
            <Stack.Screen name="GPSalarm" component={Layout}/>
            <Stack.Screen name="TimeAlarm" component={Layout}/>
            <Stack.Screen name="Timer" component={Layout}/>
            <Stack.Screen name="Stopwatch" component={Layout}/>
            <Stack.Screen name="WorldClock" component={Layout}/>
            <Stack.Screen name="CreateNewAlarm" component={CreateNewAlarm}/>
        </Stack.Navigator>
    </NavigationContainer>
   
  );
}