import React, { useState } from "react";
import { LoginContainer, LoginCard } from "./Login.styles";
import { Input, Button } from "../../components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      !email && setEmailError(true);
      !password && setPasswordError(true);
      return;
    }

    setPasswordError(false);
    setEmailError(false);
    // TODO: Rest of login logic once backend is hooked up
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Input
          label="username"
          onChange={(event) => setEmail(event.target.value)}
          error={emailError}
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
