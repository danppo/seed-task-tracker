import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import Radio from '@mui/material/Radio'
import IconButton from '@mui/material/IconButton';

import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from 'react';

import CheckboxedInput from '../checkboxedInput';
import AdornmentTypeInput from '../adornmentTypeInput';
import SliderInput from '../sliderInput';
import RadioButtonGroup from '../radioButtonGroup';
import TypeAhead from '../typeAhead';

import TypeAheadInput from '../typeAheadInput';


import SeedEntry from '../seedEntry';

const Form = () => {

  const [displayName, setDisplayName ] = useState<string>('');
  const [seedVolume, setSeedVolume ] = useState<string>('');
  const [growthLocation, setGrowthLocation ] = useState<string>('');
  const [growthMedium, setGrowthMedium ] = useState<string>('');
  const [comments, setComments ] = useState<string>('');
  const [soakTime, setSoakTime ] = useState<number>(0);
  const [plantTypePicked, setPlantTypePicked] = useState<string>("");
  const [plantGrowthTypes, setPlantGrowthTypes] = useState<string[]>(["Sprouts", "Shoots", "Microgreens", "Plant"]);
  const [locationOptions, setLocationOptions] = useState<string[]>(["windows sill", "kitchen window"])
  const [growthMediumOptions, setGrowthMediumOptions] = useState<string[]>(["sprouting jar", "seed tray", "kitchen Towel"])

  const onSubmit = () => {
    console.log('submitted')
  }
  const onScheduledInput = (item: object) => {
    console.log('triggered')
    console.log(item);
  }
  const onWeightVolumeChange = (input: string, inputType: string) => {
    console.log(input, inputType)
  }
  const onLocationChange = (input: string) => {
    console.log(input)
  }

  const onPlantTypePick = (picked: string) => {
    setPlantTypePicked(picked)
  }
  const onPlantTypeAdded = (added: string) => {
    console.log(added)
  }
  const manuallyAdded = (input: string, newPickedTypes: Array<string>) => {
    setPlantGrowthTypes(newPickedTypes);
    setPlantTypePicked(input);
  }

  const weightVolumeOptions = [
    {value: "gram", displayName: "grams"},
    {value: "ounce", displayName: "oz"},
    {value: "teaspoon", displayName: "tsp"},
    {value: "tablespoon", displayName: "tbsp"}
  ]
  const taskSchedule = [ 'Morning', 'Midday', 'Evening' ];
  

  const soakTimeRange = {
    min: 0,
    max: 12
  }

  return (
    <Card sx={{ minWidth: 275, maxWidth: 950, p: 4 }}>
      {/* <SeedEntry /> */}

      <Typography variant="h3" component="h3">
        Add New Seeds
      </Typography>
      <Stack spacing={2} >
        <TextField
          fullWidth
          value={displayName}
          label="Give this growth a name"
          helperText="Give it a name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDisplayName(e.target.value)}
          // onBlur={() => console.log('Blured')}
        />
        <TypeAheadInput />

          <AdornmentTypeInput 
            adornmentInitialValue={weightVolumeOptions[1].value}
            adornmentOptions={weightVolumeOptions}
            onChange={onWeightVolumeChange}
            label="How much seed did you use"
            helperText="add by volume or weight"
          
          />
        {/* TODO: add field with volume or weight or both */}

        <SliderInput 
          value={soakTime}
          onChange={setSoakTime}
          title="Soaking Time (hours)"
          range={soakTimeRange}
        />
        <RadioButtonGroup
            addedManually={manuallyAdded}
            title="Plant type"
            options={plantGrowthTypes}
            picked={plantTypePicked}
            onChange={onPlantTypePick}
            onInput={onPlantTypeAdded}
        />

      <TypeAhead
          title={"Where"}
          options={locationOptions}
          onChange={onLocationChange}
          newAdded={setLocationOptions}
      />

      <TypeAhead
          title={"In what"}
          options={growthMediumOptions}
          onChange={setGrowthMedium}
          newAdded={setGrowthMediumOptions}
      />


        <CheckboxedInput
          label="Add reminders to water or mist"
          checkboxValues={taskSchedule}
          onChange={onScheduledInput}
        />

        <TextField
          multiline
          fullWidth
          id="comment"
          label="Any more comments"
          value={comments}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setComments(e.target.value)}
          />

      </Stack>

      <Button
        variant="contained"
        onClick={() => onSubmit()}
      >
        Grow These Seeds
      </Button>
    </Card>
  );
}

export default Form;