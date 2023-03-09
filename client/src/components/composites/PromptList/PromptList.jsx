import React, { useEffect, useState } from "react";
import {
  PromptCard,
  SectionTitle,
  Button,
  LoadingCircle,
} from "../../../components";
import { Snackbar, Alert } from "@mui/material";

import { useMutation, useQuery } from "@apollo/client";
import { QUERY_PROMPTS } from "../../../utils/queries";
import { SET_ACTIVE_PROMPT } from "../../../utils/mutations";

import { Root } from "./PromptList.styles";

const PromptList = () => {
  const { loading, data } = useQuery(QUERY_PROMPTS);
  const { getPrompts: prompts } = data || [];

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [alertProps, setAlertProps] = useState({});

  const [setActivePrompt, { error: setPromptError }] = useMutation(SET_ACTIVE_PROMPT);

  const [displayedPrompts, setDisplayedPrompts] = useState(null);
  const [selectedPrompt, setSelectedPrompt] = useState(null);

  const setThreePrompts = (initial) => {
    setSelectedPrompt(null);
    let newThreePrompts = [];

    while (newThreePrompts.length < 3) {
      const newPrompt = initial[Math.floor(Math.random() * initial.length)];

      if (newThreePrompts.includes(newPrompt)) {
        continue;
      }

      newThreePrompts = [...newThreePrompts, newPrompt];
    }

    setDisplayedPrompts(newThreePrompts);
  };

  useEffect(() => {
    if(setPromptError){
      setAlertProps({ message: "Error in setting prompt. Are you logged in?", severity: 'error'})
      return setSnackbarOpen(true);
    }
  }, [setPromptError])

  const submitSelectedPrompt = async () => {
    const response = await setActivePrompt({
      variables: { promptId: selectedPrompt?.id },
    });

    if(!response?.data?.activePrompt?.unique_id){
      setAlertProps({ message: "Error in creating post :(", severity: "error" })
      return setSnackbarOpen(true);
    }

    setAlertProps({ message: "Active Prompt set successfully :D", severity: "success"})
    return setSnackbarOpen(true);
  };

  useEffect(() => {
    if (prompts?.length > 0 && !displayedPrompts) {
      setThreePrompts(prompts);
    }
  }, [prompts]);

  return (
    <Root>
      {loading ? (
        <LoadingCircle />
      ) : (
        <>
          <SectionTitle>Pick a prompt!</SectionTitle>
          {displayedPrompts &&
            displayedPrompts?.length > 0 &&
            displayedPrompts.map(({ title, _id: id }) => {
              return (
                <PromptCard
                  key={id}
                  title={title}
                  id={id}
                  stateSetter={setSelectedPrompt}
                  isSelected={selectedPrompt?.id === id}
                />
              );
            })}
          <Button
            style={{ width: 300, margin: 20 }}
            variant="outlined"
            onClick={() => setThreePrompts(prompts)}
          >
            Shuffle Prompts!
          </Button>
          <Button
            disabled={!selectedPrompt}
            style={{ width: 300 }}
            variant="outlined"
            onClick={submitSelectedPrompt}
          >
            Select Prompt!
          </Button>
        </>
      )}
      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center'}} open={snackbarOpen} autoHideDuration={2000} onClose={() => {
        setSnackbarOpen(false);
        if(alertProps?.severity === 'success') return window.location.assign("/create-post");
      }}>
        <Alert severity={alertProps?.severity} sx={{ width: '100%' }}>
          {alertProps?.message}
        </Alert>
      </Snackbar>
    </Root>
  );
};

PromptList.defaultProps = {};

export default PromptList;
