import { FC } from "react";
import Welcome from "../components/Layouts/Welcome/Welcome";
import QuizStore from "../store/QuizStore";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import StartLearning from "../components/Layouts/StartLearning/StartLearning";

const HomePage: FC = () => {
  const newPath = useNavigate();
  const location = useLocation();

  const handleStartLearning = () => {
    QuizStore.resetStore();
    return newPath(`${location.pathname}quiz-page`);
  };
  return (
    <Box
      as="section"
      maxWidth="1200px"
      m="auto"
      px={["20px", "20px", "40px"]}
      py={["20px", "20px", "40px"]}
    >
      <Box
        position="absolute"
        left="20px"
        bottom="20px"
        display="flex"
        justifyContent="center"
      ></Box>
      <Welcome>
        <StartLearning />
      </Welcome>
    </Box>
  );
};

export default HomePage;
