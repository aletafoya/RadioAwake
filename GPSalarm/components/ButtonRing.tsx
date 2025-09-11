import React from "react"
import { Button } from "react-native"

type ButtonRingProps = {
    title: string
}

export default function ButtonRing({title} : ButtonRingProps) {
    return (
        <Button title={title}/>        
    );
}