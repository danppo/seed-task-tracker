import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Register = () => {
  let navigate = useNavigate();

  const baseUrl = "http://localhost:3005/register";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [cookieAuth, setCookieAuth] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [token, setToken] = useState("");

  const onSubmit = () => {
    setErrorStatus(false);
    setErrorMessage("");
    axios
      .post(baseUrl, {
        email,
        firstName,
        lastName,
        password,
      })
      .then((res) => {
        console.log(res.data);
        
        if (res.data.message) {
          setServerMessage(res.data.message);
        }
        if (res.data.token) {
          setToken(res.data.token);
          setRegisterSuccess(true);
        }
        if (cookieAuth && res.data.token) {
          localStorage.setItem("jwt", JSON.stringify(res.data.token));
        }
      })
      .catch((err) => {
        if (err.response) {
          setErrorMessage(
            err.response.data.message
              ? err.response.data.message
              : "There has been an problem Please try again"
          );
          setErrorStatus(true);
        }
      });
  };

  const handleCookieAuth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCookieAuth(e.target.checked);
  };

  useEffect(() => {
    if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      email.length > 0 &&
      password.length > 0
    ) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [firstName, lastName, email, password]);

  useEffect(() => {
    if (cookieAuth) {
      localStorage.setItem("cookiesAllowed", JSON.stringify(true));
    }
    if (cookieAuth && registerSuccess) {
      localStorage.setItem("jwt", token);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    }
  }, [cookieAuth, registerSuccess]);

  useEffect(() => {
    setToken("");
  }, []);

  return (
    <Card sx={{ minWidth: 275, maxWidth: 950, p: 4 }}>
      <Stack spacing={2}>
        <Typography variant="h4" component="h4">
          Register
        </Typography>

        <Stack spacing={2} direction="row">
          <TextField
            required
            disabled={registerSuccess}
            value={firstName}
            label="First name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFirstName(e.target.value)
            }
          />
          <TextField
            required
            disabled={registerSuccess}
            value={lastName}
            label="Last name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLastName(e.target.value)
            }
          />
        </Stack>

        <TextField
          required
          disabled={registerSuccess}
          fullWidth
          value={email}
          label="Email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />

        <TextField
          required
          disabled={registerSuccess}
          fullWidth
          value={password}
          type="password"
          label="Password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={cookieAuth}
                onChange={handleCookieAuth}
                disabled={registerSuccess && cookieAuth}
              />
            }
            label="Allow cookies to enable you use SeedTracker and improve your experience"
          />
        </FormGroup>

        {errorStatus && <Alert severity="error">{errorMessage}</Alert>}

        {!registerSuccess && (
          <Button
            variant="contained"
            disabled={submitDisabled}
            onClick={() => onSubmit()}
          >
            Register
          </Button>
        )}
        {registerSuccess && cookieAuth && (
          <>
            <Alert severity="success">
              <AlertTitle>
                {serverMessage.length > 0
                  ? serverMessage
                  : "Registration Successful"}
              </AlertTitle>
              Creating your dashboard
            </Alert>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </Box>
          </>
        )}
        {registerSuccess && !cookieAuth && (
          <Alert severity="warning">
            <AlertTitle>Registration Successful</AlertTitle>
            Please accept cookies to continue to login and access your dashboard
          </Alert>
        )}
      </Stack>
    </Card>
  );
};

export default Register;
