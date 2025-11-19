export type RootStackParamList = {
    CreateNewAlarm: {ringtone: {id: string, name: string}} | undefined;
    GPSalarm: undefined;
    TimeAlarm: undefined;
    Timer: {ringtone: {id: string, name: string}} | undefined;
    Stopwatch: undefined;
    WorldClock: undefined;
    Layout: undefined;
    SetRingtone: undefined;
    SetTimeAlarm: undefined;
    Ringtones: {
        returnTo: "CreateNewAlarm" | "Timer"
    }
}