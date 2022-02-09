import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

type Props = {
  onClose?: () => void
  seedNameInput?: string,
}

const SeedEntry = ({onClose, seedNameInput = ""}:Props) => {

  const [seedName, setSeedName] = useState<string>(seedNameInput);
  const [seedPrice, setSeedPrice] = useState<string | null>();
  const [packetWeight, setPacketWeight] = useState<string | null>();
  const [weightTsp, setWeightTsp] = useState<string | null>();
  const [shop, setShop] = useState<string | null>("");
  const [link, setLink] = useState<string | null>("");

// TODO: handle submit push new value to server 
  const handleSubmit = () => {
    console.log("submit");
    if (onClose) {
      onClose();
    }
  }

  // TODO: validate inputs are numbers
  const isNumbers = (inValue:string) => {
    const chars = /^([0-9]+\.?[0-9]*|\.[0-9]+)$/;
    if ((inValue.match(chars))) {
      console.log('is match');
      
    } else {
      console.log('Failed');
      
    }
  };

  return (
    <>
      <Card  sx={{p: 2 }}>
        <Stack spacing={2} >
          <Typography variant="h6" component="h6">
            Seed Packet Information
          </Typography>
          <TextField label="Seed Name" onChange={(e) => {setSeedName(e.target.value)}} value={seedName}/> 
          <Stack spacing={2}  direction="row" >
            <TextField label="Packet price" onChange={(e) => {setSeedPrice(e.target.value)}} value={seedPrice}/> 
            <TextField label="packet weight" onChange={(e) => {setPacketWeight(e.target.value)}} value={packetWeight}/> 
            <TextField label="Weight per tsp" onChange={(e) => {setWeightTsp(e.target.value)}} value={weightTsp}/> 
          </Stack>
          <TextField fullWidth id="seedPurchase" label="Seller name" onChange={(e) => {setShop(e.target.value)}} value={shop}/> 
          <TextField fullWidth id="link" label="Purchase link" onChange={(e) => {setLink(e.target.value)}} value={link}/> 
          <Button
            variant="contained"
            onClick={handleSubmit}
          >
            Add to your inventory
          </Button>
          <Button
            
            onClick={onClose}
          >
            Close
          </Button>
        </Stack>
      </Card>
    </>
  )
};

export default SeedEntry;
