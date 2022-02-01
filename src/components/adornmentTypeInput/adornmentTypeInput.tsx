import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from 'react';
import styles from "./adornmentTypeInput.module.scss"

interface OptionList {
  value: string;
  displayName: string;
};

type Props = {
  adornmentInitialValue: string;
  adornmentOptions: OptionList[];
  onChange: (value: string, adornment: string) => void;
  label: string;
  helperText: string;
};

const AdornmentTypeInput = ({
  adornmentInitialValue,
  adornmentOptions,
  onChange,
  label,
  helperText
}: Props) => {
  const [adornmentValue, setAdornmentValue] = useState<string>(adornmentInitialValue)
  const [inputValue, setInputValue ] = useState<string>('');

  const handleAdornmentChange = (e: SelectChangeEvent) => {
    setAdornmentValue(e.target.value);
  }

  useEffect(() => {
    if (inputValue.length > 0 ){
      onChange(inputValue, adornmentValue)
    }
  }, [inputValue, adornmentValue])
  
  const Adornment = () => (
    <FormControl>
      <Select
        className={styles.select}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={adornmentValue}
        label="Volume-weight"
        onChange={handleAdornmentChange}
      >
        {adornmentOptions.map((option) =>
        <MenuItem key={option.value} value={option.value}>{option.displayName}</MenuItem>
        )}
      </Select>
    </FormControl>
  );

  return (
    <TextField
      fullWidth
      id="seedVolume"
      value={inputValue}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
      label={label}
      InputProps={{
        endAdornment: <InputAdornment position="end"><Adornment /></InputAdornment>,
      }}
      helperText={helperText}
    />
  )};

  export default AdornmentTypeInput;
