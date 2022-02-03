import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, TextField } from '@mui/material';
import { useState } from 'react';

import styles from './radioButtonGroup.module.scss';

type Props = {
  title: string;
  options: string[];
  picked: string;
  addedManually: (input:string, newArray: Array<string>) => void,
  onChange: (picked:string) => void;
  onInput: (added:string) => void;
}

const RadioButtonGroup = ({
  title,
  options,
  picked,
  addedManually,
  onChange,
  onInput,
}:Props) => {

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInput(e.target.value);
    setUserInput(e.target.value);
  }
  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      addedManually(e.target.value, [...options, e.target.value]);
      setUserInput("");
      setUserAdded([...userAdded, e.target.value]);
    }
  }

  // TODO: add option to clear manually entered types

  const [userInput, setUserInput] = useState<string>("")
  const [userAdded, setUserAdded] = useState<string[]>([])

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">
        {title}
      </FormLabel>
      <RadioGroup
        row
        onChange={(e) => onChange(e.target.value)}
        value={picked}
      >
        {options.map((option) => (
          <FormControlLabel key={option} value={option} control={<Radio />} label={option} />

        ))}

        <TextField className={styles.manualInput} value={userInput} onBlur={onBlur} onChange={inputChange} label="Add your own" variant="standard" />
      </RadioGroup>

    </FormControl>
  )
};

export default RadioButtonGroup;

