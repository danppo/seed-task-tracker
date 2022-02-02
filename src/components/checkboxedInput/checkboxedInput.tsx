import {ChangeEvent, useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import styles from './checkboxedInput.module.scss';

type Props = {
  label: string;
  checkboxValues: string[];
  onChange: (item: object) => void;
}
const CheckboxedInput= ({
  label,
  checkboxValues,
  onChange
}: Props
) => {
  const [pickedCheckBox, setPickedCheckBox] = useState<string[]>([]);
  const [inputValue, setInputValue ] = useState<string>('');

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    if (pickedCheckBox.indexOf(name) === -1) {
      setPickedCheckBox([...pickedCheckBox, name])
    } else {
      const filterArray = pickedCheckBox.filter((item: string) => item !== name);
      setPickedCheckBox(filterArray)
    }
  };
  useEffect(() => {
    if (inputValue.length > 0 && pickedCheckBox.length > 0)
    onChange({ inputValue, pickedCheckBox })

  }, [pickedCheckBox, inputValue, onChange])

  return (
    <div className={styles.InputAndOptions}>
      <TextField
        id="taskAction"
        label={label}
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
      />
      <FormGroup className={styles.checkboxInputs}>
        {
          checkboxValues.map((checkValue: string) => 
            <FormControlLabel
              key={checkValue}
              control={
                <Checkbox
                  checked={pickedCheckBox.indexOf(checkValue) === -1 ? false : true }
                  onChange={handleChange}
                  name={checkValue}
                  inputProps={{ 'aria-label': 'controlled' }}
                  size="small"
                />
              }
              label={checkValue}
            />
          )
        }
      </FormGroup>
    </div>
  );
}

export default CheckboxedInput
