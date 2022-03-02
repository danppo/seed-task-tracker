import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Register = () => {
  let navigate = useNavigate();

  const baseUrl = "http://localhost:3005/login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [cookieAuth, setCookieAuth] = useState(false);
  const [cookieAllowed, setCookieAllowed] = useState(false);

  const [token, setToken] = useState("");

  //

  const onSubmit = () => {
    setErrorStatus(false);
    setErrorMessage("");
    if (email.length > 0 && password.length > 0) {
      axios
        .post(baseUrl, {
          email,
          password,
        })
        .then((res) => {
          console.log(res.data);

          if (res.data.token) {
            console.log("has token");

            setToken(res.data.token);
            setRegisterSuccess(true);
            localStorage.setItem("jwt", res.data.token);
            navigate("/dashboard");
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
    }
  };

  const handleCookieAuth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCookieAuth(e.target.checked);
    localStorage.setItem("cookiesAllowed", JSON.stringify(true));
    setCookieAllowed(true);
  };

  useEffect(() => {
    setCookieAllowed(
      localStorage.getItem("cookiesAllowed") === "true" ? true : false
    );
    setCookieAuth(false);
    // setToken('');
  }, []);

  return (
    <Card sx={{ minWidth: 275, maxWidth: 950, p: 4 }}>
      <Stack spacing={2}>
        <Typography variant="h4" component="h4">
          Login
        </Typography>

        <TextField
          required
          fullWidth
          value={email}
          label="Email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />

        <TextField
          required
          fullWidth
          value={password}
          type="password"
          label="Password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />

        {!cookieAllowed && (
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={cookieAuth} onChange={handleCookieAuth} />
              }
              label="Allow cookies to enable you use SeedTracker and improve your experience"
            />
          </FormGroup>
        )}

        {errorStatus && <Alert severity="error">{errorMessage}</Alert>}

        <Button
          variant="contained"
          disabled={!cookieAllowed}
          onClick={() => onSubmit()}
        >
          Login
        </Button>
      </Stack>
    </Card>
  );
};

export default Register;
