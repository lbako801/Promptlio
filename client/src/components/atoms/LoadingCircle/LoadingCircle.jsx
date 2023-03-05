import { CircularProgress } from "@mui/material";
import { Root, LoadingText } from "./LoadingCircle.styles";

const LoadingCircle = () => {
  return (
    <Root>
      <LoadingText>Loading, Please Wait...</LoadingText>
      <CircularProgress size={200} />
    </Root>
  );
};

export default LoadingCircle;
