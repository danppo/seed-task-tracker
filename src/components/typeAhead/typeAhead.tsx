import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

type Props = {
  title: string;
  options: string[];
  onChange: (value: string) => void;
  newAdded: (value: string[]) => void;
}
const TypeAhead = ({title, options, onChange, newAdded}:Props) => {
  const [inputValue, setInputValue] = useState<string>('');

  const onBlur = (() => {
    if (options.indexOf(inputValue) === -1) {
      newAdded([...options, inputValue]);
    }
  });

  return (
    <Autocomplete
      onBlur={onBlur}
      onChange={(event: any, newValue: string | null) => {
        if (newValue && newValue.length > 0) {
          setInputValue(newValue);
          onChange(newValue);
        } else {
          setInputValue("");
          onChange("")
        }
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
        onChange(newInputValue);
      }}
      freeSolo
      options={options}
      renderInput={(params) => <TextField {...params} label={title} />}
    />

  )
};

export default TypeAhead;
