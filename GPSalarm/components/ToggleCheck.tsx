import { useState }from "react";
import { Checkbox } from "expo-checkbox"

export default function ToggleCheck() {
    const [checked, setChecked] = useState(false)
    return (
        <Checkbox className="" value={checked} onValueChange={setChecked} color={checked ? '#4630EB' : '#757575'}/>
    );
}