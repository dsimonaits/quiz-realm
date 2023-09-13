import React, { useEffect, useMemo, useState } from "react";
import { observer } from "mobx-react-lite";
import {
  Box,
  HStack,
  List,
  ListItem,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Section from "../components/Layouts/Section/Section";
import QuizStore from "../store/QuizStore";
import MainContainer from "../components/Layouts/Container/Container";
import { useNavigate } from "react-router-dom";
import { IQuiz } from "../types/types";
import shuffleArray from "../utils/arrayUtils";
import CustomRadios2 from "../components/UI/Radio/CustomRadios2";
import QuizButton from "../components/UI/Button/Button";
import StartLearning from "../components/form/StartLearning/StartLearning";
import QuizModal from "../components/UI/Modal/Modal";

export const QuizPage = observer(() => {
  const [quizNumber, setQuizNumber] = useState(0);
  const [currentQuiz, setCurrentQuiz] = useState<IQuiz | null>(null);
  const [showResult, setShowResult] = useState(false);

  const quizStoreInstance = QuizStore;
  const quizzes = quizStoreInstance.StartQuizData;
  const navigate = useNavigate();

  const resultModalDisclosure = useDisclosure();

  const handleComplete = () => {
    resultModalDisclosure.onClose();
    quizStoreInstance.resetStore();
    navigate("/");
  };

  useEffect(() => {
    if (quizzes.length === 0) navigate("/");
    if (quizzes.length < quizNumber + 1) {
      setShowResult(true);
      resultModalDisclosure.onOpen();

      return;
    }
    setCurrentQuiz(quizzes[quizNumber]);
  }, [quizNumber]);

  useEffect(() => {
    if (showResult && !resultModalDisclosure.isOpen)
      resultModalDisclosure.onOpen();
  }, [showResult, resultModalDisclosure]);

  if (currentQuiz === null) {
    return null;
  }

  const handleSetAnswer = (value: string) => {
    quizStoreInstance.setAnswer(value);
  };

  const handleOnNext = () => {
    quizStoreInstance.selectedAnswer === currentQuiz.answers.answer
      ? quizStoreInstance.setUserResult(true)
      : quizStoreInstance.setUserResult(false);

    setQuizNumber(quizNumber + 1);
  };
  const shuffledAnswers: string[] = shuffleArray(
    Object.values(currentQuiz.answers)
  );

  return (
    <Section>
      <MainContainer>
        {showResult ? (
          <QuizModal modalTitle="Your Score" disclosure={resultModalDisclosure}>
            <p>
              Good: {quizStoreInstance.userResult.good} <br /> Fault:
              {quizStoreInstance.userResult.fault}{" "}
            </p>
            <HStack justify="center" gap="20px">
              <QuizButton onClickHandler={handleComplete}>Complete</QuizButton>
            </HStack>
          </QuizModal>
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
