import React, {useState, useEffect} from 'react'
import { useMutation, useQuery } from "@apollo/client"
import { Input, Button } from "../../components";
import { Container, StyledCard, ActivePrompt } from './CreatePost.styles';
import { QUERY_ME } from '../../utils/queries';
import { CREATE_POST } from '../../utils/mutations';

const CreatePost = () => {
  const { loading, error, data } = useQuery(QUERY_ME);

  const activePromptId = data?.getMe?.activePrompt?._id;
  const title = data?.getMe?.activePrompt?.title;

  const [createPost, { error: createPostError }] = useMutation(CREATE_POST);

  const [caption, setCaption] = useState("");
  const [captionError, setCaptionError] = useState(false);

  const handleSubmit = async (event) => {
    console.log(caption);

    const response = await createPost({ variables: { caption, promptId: activePromptId}});
    console.log(response);
    
    if(!response?.data?.createPost?._id) {
      window.alert("Post creation failed, try again later :'(");
    }

    window.alert("Post created successfully :D!");
    window.location.assign("/");
  }

  return (
    <Container>
      <StyledCard>
        <ActivePrompt>
          Active Prompt: {title}
        </ActivePrompt>
        <Input onChange={(e) => setCaption(e.target.value)} label="Add a caption!" multiline rows={4}/>
        Upload Photo: Coming Soon...
        <Button type='submit' onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>Create Post!</Button>
      </StyledCard>
    </Container>
  )
}

export default CreatePost