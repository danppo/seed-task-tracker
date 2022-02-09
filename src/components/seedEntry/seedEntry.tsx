import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const SeedEntry = () => {

  return (
    <>
      <Card  sx={{p: 2 }}>
        <Stack spacing={2} >
          <Typography variant="h6" component="h6">
            Seed Packet Information
          </Typography>
          <TextField  id="seedType" label="Seed Type" /> 
          <Stack spacing={2}  direction="row" >
            <TextField  id="seedPrice" label="How much was it" /> 
            <TextField  id="seedPriceWeight" label="What's the weight" /> 
            <TextField  id="weighttsp" label="Weight per tsp" /> 
          </Stack>
          <TextField fullWidth id="seedPurchase" label="Where did you buy them" /> 
          <TextField fullWidth id="link" label="Add the link" /> 
          <Button
            variant="contained"
            // onClick={() => onSubmit()}
          >
            Add seeds to your inventory
          </Button>
        </Stack>
      </Card>
    </>
  )
};

export default SeedEntry;
