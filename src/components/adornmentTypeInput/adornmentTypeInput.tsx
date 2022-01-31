import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface OptionList {
  value: string;
  displayName: string;
};
// TODO: add props label, wire up use effect, helper trxt props
type Props = {
  adornmentInitialValue: string;
  adornmentOptions: OptionList[];
  onChange: (value: string, adornment: string) => void;
};

const AdornmentTypeInput = ({
  adornmentInitialValue,
  adornmentOptions,
  onChange
}: Props) => {
  const [weightVolume, setWeightVolume] = useState<string>(adornmentInitialValue)
  const [seedVolume, setSeedVolume ] = useState<string>('');

  const handleWeightVolumeChange = (event: SelectChangeEvent) => {
    console.log('handleWeightVolumeChange');
    setWeightVolume(event.target.value);
  }

  console.log(adornmentInitialValue);
  

  useEffect(() => {
    onChange('hard Value', 'hard Adornment')
  }, [])
  

  const Adornment = () => (
    <FormControl>
      {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={weightVolume}
        label="Volume-weight"
        onChange={handleWeightVolumeChange}
      >
        {adornmentOptions.map((option) =>
        <MenuItem key={option.value} value={option.value}>{option.displayName}</MenuItem>
        )}
        {/* <MenuItem value={"gram"}>gram</MenuItem>
        <MenuItem value={"teaspoon"}>tsp</MenuItem>
        <MenuItem value={"tablespoon"}>tbsp</MenuItem> */}
      </Select>
    </FormControl>
  );

  return (
    <TextField
      fullWidth
      id="seedVolume"
      value={seedVolume}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSeedVolume(e.target.value)}
      label="How much seed did you use"
      InputProps={{
        endAdornment: <InputAdornment position="start"><Adornment /></InputAdornment>,
      }}
      helperText="add by volume or weight or both"
    />
  )};

  export default AdornmentTypeInput;