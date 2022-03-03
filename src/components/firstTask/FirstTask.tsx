import React, {FC, useState} from "react";
import FormControl from "@mui/material/FormControl";
import HashTableComponent from "../hashTable/HashTableComponent";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const FirstTask: FC = () =>{

    const [value, setValue] = useState(0);

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };

    return(
        <div className="sliderWrapper">
            <FormControl component="fieldset">
                <FormLabel component="legend">Способ решения коллизий</FormLabel>
                <RadioGroup
                    aria-label="Способ решения коллизий"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel
                        value={0}
                        control={<Radio/>}
                        label="Рехеширование с помощью произведения в таблице"
                    />
                    <FormControlLabel
                        value={1}
                        control={<Radio/>}
                        label="Простой список"
                    />
                </RadioGroup>
            </FormControl>
            <HashTableComponent solutionMethod={value === 0 ? 'list' : 'product'}/>
        </div>
    )
}

export default FirstTask