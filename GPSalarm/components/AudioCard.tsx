import React from 'react';
import LabelRing from './LabelRing';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';
type AudioCardProp = {
    name: string
}

export default function AudioCard({name} : AudioCardProp) {
    return (
        <View>
            <LabelRing title={name} description=''/> 
            <RadioButton value="first" status='unchecked'/>
        </View>
    )
}