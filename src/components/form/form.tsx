import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import CheckboxedInput from '../checkboxedInput';

const Form = () => {

  const [displayName, setDisplayName ] = useState<string>('');
  const [seedVolume, setSeedVolume ] = useState<string>('');
  const [growthType, setGrowthType ] = useState<string>('');
  const [growthLocation, setGrowthLocation ] = useState<string>('');
  const [growthMedium, setGrowthMedium ] = useState<string>('');
  const [taskAction, setTaskAction ] = useState<string>('');
  const [taskSchedule, setTaskSchedule ] = useState<string>('');
  const [comments, setComments ] = useState<string>('');

  const onSubmit = () => {
    console.log('submitted')
  }
  const onScheduledInput = (item: object) => {
    console.log('triggered')
    console.log(item);
    

  }


  return (
    <Card sx={{ minWidth: 275, maxWidth: 950, p: 4 }}>

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
          disabled
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

        <TextField
          fullWidth
          id="seedVolume"
          value={seedVolume}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSeedVolume(e.target.value)}
          label="How much seed did you use"
          helperText="add by volume or weight or both"
        />
        {/* TODO: add field with volume or weight or both */}
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

        <CheckboxedInput
          label="Add reminders to water or mist"
          checkboxValues={[ 'Morning', 'Late Morning', 'Midday', 'Evening' ]} //TODO: pull these values from user settings 
          onChange={onScheduledInput}
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