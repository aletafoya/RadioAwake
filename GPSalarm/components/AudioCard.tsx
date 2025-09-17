import React from 'react';
import LabelRing from './LabelRing';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';
type AudioCardProp = {
    name: string,
    state: boolean
}

export default function AudioCard({ name, state } : AudioCardProp) {
    return (
        <View>
            <LabelRing title={name} description=''/> 
            <RadioButton value="first" 
                status={state ? "checked" : "unchecked"}/>
        </View>
    )
}