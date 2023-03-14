import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Input, Button } from "../../components";
import { Container, StyledCard, ActivePrompt } from "./CreatePost.styles";
import { QUERY_ME } from "../../utils/queries";
import { CREATE_POST, UPLOAD_PHOTO } from "../../utils/mutations";
import { Alert, Snackbar } from "@mui/material";

const CreatePost = () => {
  const { loading, error, data } = useQuery(QUERY_ME);

  const activePromptId = data?.getMe?.activePrompt?._id;
  const title = data?.getMe?.activePrompt?.title;

  const [createPost, { error: createPostError }] = useMutation(CREATE_POST);
  const [uploadPhoto, { error: uploadImageError }] = useMutation(UPLOAD_PHOTO);

  const [caption, setCaption] = useState("");
  const [captionError, setCaptionError] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [alertProps, setAlertProps] = useState({});

  const [photo, setPhoto] = useState("");

  useEffect(() => {
    if (createPostError) {
      setAlertProps({
        message: "Error in creating post. Make sure you've set a prompt first!",
        severity: "error",
      });
      return setSnackbarOpen(true);
    }
  }, [createPostError]);

  const handleSubmit = async (event) => {
    if (!photo) {
      return window.alert("Please select a photo for your post!");
    }

    const response = await createPost({
      variables: { caption, promptId: activePromptId, photo },
    });

    if (!response?.data?.createPost?._id) {
      setAlertProps({
        message: "Error in creating post :(",
        severity: "error",
      });
      return setSnackbarOpen(true);
    }
    setAlertProps({
      message: "Post created successfully! :D",
      severity: "success",
    });
    return setSnackbarOpen(true);

    // const response = await uploadPhoto({ variables: { file: photo } });
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  return (
    <Container>
      <StyledCard>
        <ActivePrompt>Active Prompt: {title}</ActivePrompt>
        <Input
          onChange={(e) => setCaption(e.target.value)}
          label="Add a caption!"
          multiline
          rows={4}
        />
        <Input type="file" onChange={handlePhotoChange} />
        <Button
          disabled={caption?.length === 0}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Create Post!
        </Button>
      </StyledCard>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => {
          setSnackbarOpen(false);
          if (alertProps?.severity === "success")
            return window.location.assign("/");
        }}
      >
        <Alert severity={alertProps?.severity} sx={{ width: "100%" }}>
          {alertProps?.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CreatePost;
