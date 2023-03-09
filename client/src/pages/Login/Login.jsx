import React, { useState, useEffect } from "react";
import { LoginContainer, LoginCard } from "./Login.styles";
import { Input, Button } from "../../components";

import { Snackbar, Alert } from "@mui/material";

import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";

import Auth from "../../utils/auth";

const Login = () => {
  const [loginUser, { error: loginError }] = useMutation(LOGIN);

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [alertProps, setAlertProps] = useState({});

  useEffect(() => {
    if(loginError){
      setAlertProps({ message: "Could not log user in :(", severity: 'error'})
      return setSnackbarOpen(true);
    }
  }, [loginError]);

  const handleLogin = async () => {
    if (!username || !password) {
      !username && setUsernameError(true);
      !password && setPasswordError(true);
      return;
    }

    setPasswordError(false);
    setUsernameError(false);

    try {
      const response = await loginUser({ variables: { username, password } });

      if (!response?.data?.login?.token) {
        throw new Error("Invalid Credentials");
      }

      setAlertProps({ message: "Logged in successfully! :D", severity: "success"})
      setSnackbarOpen(true);

      setTimeout(() => {
        Auth.login(response?.data?.login?.token);
      }, 2000);
    } catch (err) {
      setAlertProps({ message: "Could not log user in :(", severity: 'error'})
      console.log(err);
      return setSnackbarOpen(true);
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Input
          label="username"
          onChange={(event) => setUsername(event.target.value)}
          error={usernameError}
        />
        <Input
          label="password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          error={passwordError}
        />
        <Button variant="outlined" size="large" onClick={handleLogin}>
          Login
        </Button>
      </LoginCard>
      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center'}} open={snackbarOpen} autoHideDuration={2000} onClose={() => setSnackbarOpen(false)}>
        <Alert severity={alertProps?.severity} sx={{ width: '100%' }}>
          {alertProps?.message}
        </Alert>
      </Snackbar>
    </LoginContainer>
  );
};

export default Login;
