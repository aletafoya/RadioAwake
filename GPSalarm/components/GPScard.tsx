import { StyleSheet, View} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
// PROVIDER_GOOGLE para que el mapa sea de Google Maps
export default function GPScard() {
    return (
        <View className="w-full h-full">
            <MapView 
                provider={PROVIDER_GOOGLE} 
                style={styles.map}
            />
        </View>
    );
}

// Estilos para el mapa, no es posible usar tailwind
const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});