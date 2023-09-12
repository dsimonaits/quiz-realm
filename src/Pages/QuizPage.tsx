import React, { useEffect, useMemo, useState } from "react";
import { observer } from "mobx-react-lite";
import { Box, HStack, List, ListItem, Text } from "@chakra-ui/react";
import Section from "../components/Layouts/Section/Section";
import QuizStore from "../store/QuizStore";
import MainContainer from "../components/Layouts/Container/Container";
import { useNavigate } from "react-router-dom";
import { IQuiz } from "../types/types";
import shuffleArray from "../utils/arrayUtils";
import CustomRadios2 from "../components/UI/Radio/CustomRadios2";
import QuizButton from "../components/UI/Button/Button";

export const QuizPage = observer(() => {
  const [quizNumber, setQuizNumber] = useState(0);
  const [currentQuiz, setCurrentQuiz] = useState<IQuiz | null>(null);

  const quizStoreInstance = QuizStore;
  const quizzes = quizStoreInstance.StartQuizData;
  const navigate = useNavigate();

  useEffect(() => {
    if (quizzes.length === 0) navigate("/");
    if (quizzes.length < quizNumber + 1) {
      return;
    }
    setCurrentQuiz(quizzes[quizNumber]);
    console.log(quizNumber);
    console.log(quizzes.length);
  }, [quizNumber]);

  if (currentQuiz === null) {
    return null;
  }

  const handleSetAnswer = (value: string) => {
    quizStoreInstance.setAnswer(value);
    console.log(quizStoreInstance.selectedAnswer);
  };

  const handleOnNext = () => {
    quizStoreInstance.selectedAnswer === currentQuiz.answers.answer
      ? quizStoreInstance.setUserResult(true)
      : quizStoreInstance.setUserResult(false);

    setQuizNumber(quizNumber + 1);

    console.log(
      "selected",
      quizStoreInstance.selectedAnswer,
      "current",
      currentQuiz.answers.answer
    );

    console.log(
      quizStoreInstance.selectedAnswer === currentQuiz.answers.answer
    );
  };
  const shuffledAnswers: string[] = shuffleArray(
    Object.values(currentQuiz.answers)
  );

  return (
    <Section>
      <MainContainer>
        {quizzes.length < quizNumber + 1 ? (
          <p>
            Good: {quizStoreInstance.userResult.good} <br /> Fault:
            {quizStoreInstance.userResult.fault}{" "}
          </p>
        ) : (
          <>
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
              <Text>{currentQuiz?.question}</Text>
            </Box>
            <CustomRadios2
              options={shuffledAnswers}
              onChange={handleSetAnswer}
            />
            <QuizButton onClickHandler={() => {}}>Previous</QuizButton>
            <QuizButton onClickHandler={handleOnNext}>Next</QuizButton>
          </>
        )}
      </MainContainer>
    </Section>
  );
});
