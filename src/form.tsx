import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import MuiInput from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import { useState } from 'react';


import AdornmentTypeInput from './components/adornmentTypeInput';

const Form = () => {

  const [displayName, setDisplayName ] = useState<string>('');
  const [seedVolume, setSeedVolume ] = useState<string>('');
  const [growthType, setGrowthType ] = useState<string>('');
  const [growthLocation, setGrowthLocation ] = useState<string>('');
  const [growthMedium, setGrowthMedium ] = useState<string>('');
  const [taskAction, setTaskAction ] = useState<string>('');
  const [taskSchedule, setTaskSchedule ] = useState<string>('');
  const [comments, setComments ] = useState<string>('');


  const [value, setValue] = useState<number | string | Array<number | string>>(
    30,
  );

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const Input = styled(MuiInput)`
  width: 42px;
`;


  const onSubmit = () => {
    console.log('submitted')
  }
  const onWeightVolumeChange = (input: string, inputType: string) => {
    console.log(input, inputType)
  }

  const weightVolumeOptions = [
    {value: "gram", displayName: "grams"},
    {value: "ounce", displayName: "oz"},
    {value: "teaspoon", displayName: "tsp"},
    {value: "tablespoon", displayName: "tbsp"}
  ]

  return (
    <Card sx={{ minWidth: 275, maxWidth: 650, p: 4 }}>

      <Typography variant="h3" component="h3">
        Add New Seeds
      </Typography>
      <Stack spacing={2} >
        <TextField
          fullWidth
          id="displayName"
          value={displayName}
          label="What do you what to call it"
          helperText="Give it a name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDisplayName(e.target.value)}
          onBlur={() => console.log('Blured')}
        />
        <TextField
          fullWidth
          id="seedVariety"
          label="What is the seed variety"  
        /> 
        {/* TODO: add seeds to seed type  */}
        <Card>
          <Typography variant="h6" component="h6">
            Seed Packet Information
          </Typography>
          <TextField  id="seedPrice" label="How much was it" /> 
          <TextField  id="seedPriceWeight" label="What's the weight" /> 
          <TextField fullWidth id="seedPurchase" label="Where did you buy them" /> 
        </Card>

          <AdornmentTypeInput 
            adornmentInitialValue={weightVolumeOptions[1].value}
            adornmentOptions={weightVolumeOptions}
            onChange={onWeightVolumeChange}
            label="How much seed did you use"
            helperText="add by volume or weight"
          
          />
        {/* TODO: add field with volume or weight or both */}
        <Box sx={{ width: 350 }}>
          <Typography id="input-slider" gutterBottom>
            Soaking Time (hours)
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
              <Slider
                value={typeof value === 'number' ? value : 0}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
                // defaultValue={30}
                step={1}
                marks
                min={0}
                max={12}
              />
            </Grid>
            <Grid item>
              <Input
                value={value}
                size="small"
                onChange={handleInputChange}
                // onBlur={handleBlur}
                inputProps={{
                  step: 1,
                  min: 0,
                  max: 48,
                  type: 'number',
                  'aria-labelledby': 'input-slider',
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <TextField
          fullWidth
          id="growthType"
          label="Are you growing sprouts or microgreens"
          value={growthType}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGrowthType(e.target.value)}
        />
        <TextField
          fullWidth
          id="growthLocation"
          label="Where are you growing them"
          value={growthLocation}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGrowthLocation(e.target.value)}
        />
        <TextField
          fullWidth
          id="growthMedium"
          label="How are you growing them"
          helperText="on a tray, in a jar, etc"
          value={growthMedium}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGrowthMedium(e.target.value)}
        />

        <TextField
          fullWidth
          id="taskAction"
          label="Add reminders to water or mist"
          value={taskAction}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTaskAction(e.target.value)}
        />
        <TextField
          fullWidth
          id="taskschedule"
          label="How often do you need to do it"
          value={taskSchedule}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTaskSchedule(e.target.value)}
        />
        {/* TODO: add multiple tasks */}
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