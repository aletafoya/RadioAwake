import { useState } from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import GPSalarm from "./GPSalarm";
import Stopwatch from "./Stopwatch";
import TimeAlarm from "./TimeAlarm";
import Timer from "./Timer";
import WorldClock from "./WorldClock";
import CustomHeader from "../components/CustomHeader";
import { AlarmIcon, TimerOutlineIcon, ClockIcon, TimerSandIcon, MapMarkerIcon } from "../components/icons";

export default function Layout() {
    const layout = useWindowDimensions()
    const [index, setIndex] = useState(0)
    const routes = [
        { key: 'GPSalarm', title: 'GPS alarm' },
        { key: 'TimeAlarm', title: 'Time alarm' },
        { key: 'Timer', title: 'Timer' },
        { key: 'Stopwatch', title: 'Stopwatch' },
        { key: 'WorldClock', title: 'World clock' }
    ]
    const renderScence = SceneMap({
        GPSalarm,
        Stopwatch,
        TimeAlarm,
        Timer,
        WorldClock
    })

    const currentTitle = routes[index]?.title ?? "GPSAlarm"

    return (
        <View className="flex-1">
            <CustomHeader title={currentTitle} back={false} />
            <View className="flex-1">
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScence}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    tabBarPosition="bottom"
                    commonOptions={{
                        icon: ({ route, focused }) => {
                            const renderIcon = () => {
                                switch (route.key) {
                                    case "GPSalarm":
                                        return <MapMarkerIcon color={focused ? "#27C497" : "#757575"}/>
                                    case "TimeAlarm":
                                        return <AlarmIcon color={focused ? "#27C497" : "#757575"}/>
                                    case "Timer":
                                        return <TimerSandIcon color={focused ? "#27C497" : "#757575"}/>
                                    case "Stopwatch":
                                        return <TimerOutlineIcon color={focused ? "#27C497" : "#757575"}/>
                                    case "WorldClock":
                                        return <ClockIcon color={focused ? "#27C497" : "#757575"}/>
                                }
                            };

                            return (
                                <View style={{ 
                                    backgroundColor: focused ? "rgba(39, 196, 151, 0.5)" :  "transparent",
                                    paddingHorizontal: 10,
                                    borderRadius: 20
                                }}>
                                    {renderIcon()}
                                </View>
                            )
                        },
                        label: ({ route, labelText, focused, color }) => (
                            <Text 
                                style={{color: focused ? "#FFFFFF" : "#757575"}}
                                className="font-bold text-xs text-nowrap"
                            >
                                {labelText ?? route.title}
                            </Text>
                        ),
                    }}
                    renderTabBar={(props) => (
                        <TabBar
                            {...props}
                            style={{ backgroundColor: '#222423', borderTopColor: '#27C497', borderTopWidth: 2 }}
                            indicatorStyle={{ backgroundColor: '#27C497' }}
                        />
                    )}
                />
            </View>
        </View>
    )
}