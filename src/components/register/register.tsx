import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Register = () => {

  const baseUrl = "http://localhost:3005/register";

  const [firstName, setFirstName ] = useState<string>('');
  const [lastName, setLastName ] = useState<string>('');
  const [email, setEmail ] = useState<string>('');
  const [password, setPassword ] = useState<string>('');
  const [apiResponse, setApiResponse ] = useState<string>('');
  const [error, setError] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const onSubmit = () => {
    console.log('submitted')
    axios
    .post(baseUrl, {
      email,
      firstName,
      lastName,
      password
    })
    .then((response) => {
      setApiResponse(response.data.toString());
      console.log(response);
      
    })
    .catch((err) => {
      console.log(err);
      if (err.response) {
        console.log(err.response);
        
      }
      
    });
  }

useEffect(() => {
  axios.get(baseUrl)
    .then((response) => {
      setApiResponse(response.data)
    })
},[])

useEffect(() => {
  if (firstName.length > 0 && lastName.length > 0 && email.length > 0 ) {
    setSubmitDisabled(false);
  } else {
    setSubmitDisabled(true);
  }

}, [firstName, lastName, email, password] )


  return (
    <Card sx={{ minWidth: 275, maxWidth: 950, p: 4 }}>
      {/* <SeedEntry /> */}

      <Stack spacing={2} >

        <Typography variant="h3" component="h3">
          Register
        </Typography>

        <Stack spacing={2} direction="row" >
          <TextField
            required
            value={firstName}
            label="First name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
          />
          <TextField
            required
            value={lastName}
            label="Last name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
          />

        </Stack>

        <TextField
          required
          fullWidth
          value={email}
          label="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />

        <TextField
          required
          fullWidth
          value={password}
          type="password"
          label="Password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />



      <Button
        variant="contained"
        disabled={submitDisabled}
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