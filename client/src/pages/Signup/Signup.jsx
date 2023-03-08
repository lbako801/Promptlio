import React, { useState, useEffect } from "react";
import { SignupContainer, SignupCard, Form } from "./Signup.styles";
import { Input, Button } from "../../components";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../utils/mutations";

const Signup = () => {
  const [registerUser, { error: mutationError }] = useMutation(REGISTER_USER);

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState(" ");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState(" ");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleSubmit = async (e) => {
    let error = false;
    if (!email || !password || !username || !confirmPassword) {
      !email && setEmailError(true);
      !password && setPasswordError(true);
      !username && setUsernameError(true);
      !confirmPassword && setConfirmPasswordError(true);
      error = true;
    }

    if (password !== confirmPassword) {
      setPasswordError(true);
      setConfirmPasswordError(true);
      setPasswordHelperText("Passwords do not match");
      error = true;
    }

    if (password?.length < 8) {
      setPasswordError(true);
      setConfirmPasswordError(true);
      setPasswordHelperText("Password must be at least Eight characters");
      error = true;
    }

    // Validates email input
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError(true);
      setEmailHelperText("Invalid email address");
      error = true;
    }

    // Min 8 characters, max 35, must include on lowercase, uppercase, number and special character
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,35}$/.test(
        password
      )
    ) {
      setPasswordError(true);
      setPasswordHelperText(
        "Min 8 Chars, include 1 Upper, Lower, Number and Special Character"
      );
      error = true;
    }

    if (error) return;

    setPasswordError(false);
    setEmailError(false);
    setUsernameError(false);
    setConfirmPasswordError(false);
    setPasswordHelperText(" ");

    const response = await registerUser({
      variables: { email, password, username },
    });

    if (!response.data.registerUser.unique_id) {
      return window.alert("Error in user creation :'(");
    }

    window.alert("User registered successfully! You may now log in!");

  };

  return (
    <SignupContainer>
      <SignupCard>
        <Form>
          <Input
            label="username"
            error={usernameError}
            onChange={(event) => setUsername(event.target.value)}
            helperText=" "
            style={{ marginBottom: 6 }}
          />
          <Input
            label="email"
            type="email"
            error={emailError}
            onChange={(event) => setEmail(event.target.value)}
            helperText={emailHelperText}
            style={{ marginBottom: 6 }}
          />
          <Input
            label="password"
            type="password"
            error={passwordError}
            onChange={(event) => setPassword(event.target.value)}
            helperText={passwordHelperText}
            style={{ marginBottom: 6 }}
          />
          <Input
            label="confirm password"
            type="password"
            error={confirmPasswordError}
            onChange={(event) => setConfirmPassword(event.target.value)}
            helperText=" "
            style={{ marginBottom: 6 }}
          />
          <Button
            label="submit"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
          >
            Create Account!
          </Button>
        </Form>
      </SignupCard>
    </SignupContainer>
  );
};

export default Signup;
