import { StyleSheet, View, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function GPSalarm() {
    return (
        <View className="w-full h-1/2">
            <MapView 
                provider={PROVIDER_GOOGLE} 
                style={styles.map}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: '50%',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});