import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useDisclosure, useToast } from "@chakra-ui/react";
import Toast from "../components/UI/Toast/Toast";
import Section from "../components/Layouts/Section/Section";
import QuizStore from "../store/QuizStore";
import MainContainer from "../components/Layouts/Container/Container";
import { useNavigate } from "react-router-dom";
import { IQuiz } from "../types/types";
import shuffleArray from "../utils/arrayUtils";

import QuizModal from "../components/UI/Modal/Modal";
import QuizResult from "../components/UI/QuizResult/QuizResult";
import QuizQuestion from "../components/UI/QuizQuestion/QuizQuestion";

export const QuizPage = observer(() => {
  const [quizNumber, setQuizNumber] = useState(0);
  const [currentQuiz, setCurrentQuiz] = useState<IQuiz | null>(null);
  const [showResult, setShowResult] = useState(false);

  const quizStoreInstance = QuizStore;
  const quizzes = quizStoreInstance.StartQuizData;
  const navigate = useNavigate();

  const toast = useToast();
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
    if (showResult && !resultModalDisclosure.isOpen) navigate("/");
  }, [showResult, resultModalDisclosure]);

  if (currentQuiz === null) {
    return null;
  }

  const handleSetAnswer = (value: string) => {
    quizStoreInstance.setAnswer(value);
  };

  const handleOnNext = () => {
    const isAnswerCorrect =
      quizStoreInstance.selectedAnswer === currentQuiz?.answers.answer;

    if (isAnswerCorrect) {
      toast({
        title: "Your answered correctly!",
        position: "top",
        status: "success",
      });
      quizStoreInstance.setUserResult(true);
    } else {
      toast({
        title: "Your answered incorrectly!",
        position: "top",
        status: "error",
      });
      quizStoreInstance.setUserResult(false);
    }
    if (quizStoreInstance.selectedAnswer === "") {
      return Toast({
        toast,
        title: "You forgot to answer!",
        position: "top",
      });
    }

    quizStoreInstance.setAnswer("");

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
            <QuizResult
              result={quizStoreInstance.userResult}
              btnHandle={handleComplete}
            />
          </QuizModal>
        ) : (
          <>
            <QuizQuestion
              question={currentQuiz?.question}
              answers={shuffledAnswers}
              handleOnChange={handleSetAnswer}
              handleOnNext={handleOnNext}
            />
          </>
        )}
      </MainContainer>
    </Section>
  );
});
