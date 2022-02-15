import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Register = () => {

  const baseUrl = "http://localhost:3005/register";

  const [userName, setUserName ] = useState<string>('');
  const [email, setEmail ] = useState<string>('');
  const [password, setPassword ] = useState<string>('');
  const [apiResponse, setApiResponse ] = useState<string>('');

  const onSubmit = () => {
    console.log('submitted')
    axios
    .post(baseUrl, {
      email,
      userName,
      password
    })
    .then((response) => {
      setApiResponse(response.data);
    });
  }

useEffect(() => {
  axios.get(baseUrl)
    .then((response) => {
      setApiResponse(response.data)
    })
},[])


  return (
    <Card sx={{ minWidth: 275, maxWidth: 950, p: 4 }}>
      {/* <SeedEntry /> */}

      <Typography variant="h3" component="h3">
        Register
      </Typography>
      <Stack spacing={2} >
        <TextField
          fullWidth
          value={userName}
          label="User name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
        />

        <TextField
          fullWidth
          value={email}
          label="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          value={password}
          label="Password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />



      <Button
        variant="contained"
        onClick={() => onSubmit()}
      >
        Register
      </Button>

      </Stack>

      <div>
        {apiResponse}
      </div>

    </Card>
  );
}

export default Register;