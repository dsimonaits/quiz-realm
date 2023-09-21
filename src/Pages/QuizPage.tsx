import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IQuiz } from "../types/types";
import QuizStore from "../store/QuizStore";
import Toast from "../components/UI/Toast/Toast";
import Section from "../components/Layouts/Section/Section";
import MainContainer from "../components/Layouts/Container/Container";
import Loader from "../components/UI/Loader/Loader";
import shuffleArray from "../utils/arrayUtils";
import { lazy, Suspense } from "react";

const QuizModal = lazy(() => import("../components/UI/Modal/Modal"));
const QuizResult = lazy(() => import("../components/UI/QuizResult/QuizResult"));
const QuizQuestion = lazy(
  () => import("../components/UI/QuizQuestion/QuizQuestion")
);

const QuizPage = observer(() => {
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
  }, [quizNumber, navigate, quizzes, resultModalDisclosure]);

  useEffect(() => {
    if (showResult && !resultModalDisclosure.isOpen) navigate("/");
  }, [showResult, resultModalDisclosure, navigate]);

  if (currentQuiz === null) {
    return null;
  }

  const handleSetAnswer = (value: string) => {
    quizStoreInstance.setAnswer(value);
  };

  const handleOnNext = () => {
    const isAnswerCorrect =
      quizStoreInstance.selectedAnswer === currentQuiz?.answers.answer;
    if (quizStoreInstance.selectedAnswer === "") {
      return Toast({
        toast,
        title: "You forgot to answer!",
        position: "top",
      });
    }
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

    quizStoreInstance.setAnswer("");

    setQuizNumber(quizNumber + 1);
  };
  const shuffledAnswers: string[] = shuffleArray(
    Object.values(currentQuiz.answers)
  );

  return (
    <Suspense fallback={<Loader />}>
      <Section>
        <MainContainer>
          {showResult ? (
            <QuizModal
              modalTitle="Your Score"
              disclosure={resultModalDisclosure}
            >
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
    </Suspense>
  );
});

export default QuizPage;
