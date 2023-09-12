import React from "react";
import { observer } from "mobx-react-lite";
import { Box, List, ListItem, Text } from "@chakra-ui/react";
import Section from "../components/Layouts/Section/Section";
import QuizStore from "../store/QuizStore";
import MainContainer from "../components/Layouts/Container/Container";

export const QuizPage = observer(() => {
  const quizStoreInstance = QuizStore;
  const questions = quizStoreInstance.StartQuizData;

  return (
    <Section>
      <MainContainer>
        <Box
          display="flex"
          alignItems="center"
          p="20px"
          fontSize="1.5rem"
          width="100%"
          minH="30vh"
          bg="var(--secondaryColor)"
          color="white"
        >
          <Text>{questions[1].question}</Text>
        </Box>
        <List></List>
      </MainContainer>
    </Section>
  );
});
