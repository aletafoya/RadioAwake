import React from 'react';
import LabelRing from './LabelRing';
import { View } from 'react-native';
// import { RadioButton } from 'react-native-paper'; delete
import RadioButton from './RadioButton';

type AudioCardProp = {
    name: string,
    state: boolean,
    onSelect: () => void
    onChange: () => void
}

export default function AudioCard({ name, state, onSelect, onChange } : AudioCardProp) {
    return (
        <View className='flex-row pl-4 pt-4'>
            <LabelRing title={name} description=''/> 
            <RadioButton state={state} onPress={onSelect}/>
        </View>
    )
}