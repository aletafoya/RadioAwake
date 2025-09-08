import { MapMarkerIcon, AlarmIcon, ClockIcon, TimerOutlineIcon, TimerSandIcon } from "../../components/icons"
import "../../global.css"
import { Tabs } from "expo-router"

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerStyle: { backgroundColor: "#222423", borderBottomWidth: 2, borderColor: "#27C497" },
                headerTitleStyle: { color: "#FFFFFF" },
                tabBarStyle: { backgroundColor: "#222423", borderTopWidth: 2, borderColor: "#27C497"},
                tabBarActiveBackgroundColor: "rgba(39, 196, 151, 0.5)",
                sceneStyle: { backgroundColor: "#222423" },
                tabBarActiveTintColor: "#27C497",
                tabBarInactiveTintColor: "#757575"
            }}>
            <Tabs.Screen
                name="Index"
                options={{
                    title: "GPS Alarm",
                    tabBarIcon: ({ color }) => <MapMarkerIcon color={color} />
                }}

            />
            <Tabs.Screen
                name="Timer"
                options={{
                    title: "Timer",
                    tabBarIcon: ({ color }) => <TimerSandIcon color={color} />
                }}
            />
            <Tabs.Screen
                name="Stopwatch"
                options={{
                    title: "Stopwatch",
                    tabBarIcon: ({ color }) => <TimerOutlineIcon color={color} />
                }}
            />
            <Tabs.Screen
                name="TimeAlarm"
                options={{
                    title: "TimeAlarm",
                    tabBarIcon: ({ color }) => <AlarmIcon color={color} />
                }}
            />
            <Tabs.Screen
                name="WorldClock"
                options={{
                    title: "WorldClock",
                    tabBarIcon: ({ color }) => <ClockIcon color={color} />
                }}
            />
        </Tabs>

    )
}