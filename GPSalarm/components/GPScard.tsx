import { useEffect, useImperativeHandle, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

// PROVIDER_GOOGLE para que el mapa sea de Google Maps

// Componente que renderiza el mapa
const initialState = {
    latitude: 19.4284844,
    longitude: -99.1276628,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
};

export default function GPScard({onChange} : { onChange: (coords: { latitude: number; longitude: number } | null) => void }) {
    // Estado para las coordenadas del marcador
    const [markerCoords, setMarkerCoords] = useState<{ latitude: number; longitude: number } | null>(initialState)

    // Función para poner un marcador según se presione
    const handleMapPress = (event: { nativeEvent: { coordinate: { latitude: number; longitude: number } } }) => {
        const newCoords = event.nativeEvent.coordinate; // Obtener las coordenadas del evento
        setMarkerCoords(newCoords);
        onChange(newCoords);
    }

    return (
        <View className="w-full h-full">
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={initialState}
                onPress={handleMapPress}
            >
                {markerCoords && <Marker coordinate={markerCoords} />}
            </MapView>
        </View>
    );
}

// Estilos para el mapa, no es posible usar tailwind
const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});