import React, { useState } from "react";
import { LoginContainer, LoginCard } from "./Login.styles";
import { Input, Button } from "../../components";

import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";

import Auth from "../../utils/auth";

const Login = () => {
  const [loginUser, { error }] = useMutation(LOGIN);

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

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

      Auth.login(response?.data?.login?.token);
    } catch (err) {
      window.alert(err.message);
      console.log(err);
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
    </LoginContainer>
  );
};

export default Login;
