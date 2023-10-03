import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IQuiz } from "../types/types";
import QuizStore from "../store/QuizStore";
import Section from "../components/Layouts/Section/Section";
import MainContainer from "../components/Layouts/Container/Container";
import Loader from "../components/UI/Loader/Loader";
import shuffleArray from "../utils/arrayUtils";
import { lazy, Suspense } from "react";
import useElementFinder from "../utils/useElementFinder";

const QuizModal = lazy(() => import("../components/UI/Modal/Modal"));
const QuizResult = lazy(() => import("../components/UI/QuizResult/QuizResult"));
const QuizQuestion = lazy(
  () => import("../components/UI/QuizQuestion/QuizQuestion")
);

const QuizPage = observer(() => {
  const [quizNumber, setQuizNumber] = useState(0);
  const [currentQuiz, setCurrentQuiz] = useState<IQuiz | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answerCorrect, setAnswerCorrect] = useState<"idle" | true | false>(
    "idle"
  );
  const [buttonText, setButtonText] = useState("Select");
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);

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
    if (quizzes.length !== 0) setCurrentQuiz(quizzes[quizNumber]);
  }, [quizNumber, navigate, quizzes, resultModalDisclosure]);

  useEffect(() => {
    if (showResult && !resultModalDisclosure.isOpen) navigate("/");
  }, [showResult, resultModalDisclosure, navigate]);

  useEffect(() => {
    if (currentQuiz) {
      setShuffledAnswers(shuffleArray(Object.values(currentQuiz.answers)));
    }
  }, [currentQuiz]);

  const AnswersInputRef = useElementFinder({
    dataSetName: "data-answer",
    dependencies: shuffledAnswers,
  });
  const answers = AnswersInputRef.current;

  useEffect(() => {
    if (answerCorrect !== "idle" && answers !== null) {
      answers.map((answer) => {
        const dataAnswerValue = answer.getAttribute("data-answer");
        if (
          dataAnswerValue !== currentQuiz?.answers.answer &&
          dataAnswerValue === quizStoreInstance.selectedAnswer
        ) {
          answer.style.backgroundColor = "var(--wrongColor)";
        } else if (dataAnswerValue === quizStoreInstance.selectedAnswer) {
          answer.style.backgroundColor = "var(--correctColor)";
        } else if (dataAnswerValue === currentQuiz?.answers.answer) {
          answer.style.backgroundColor = "var(--correctColor)";
          answer.style.color = "white";
        }
      });
    }
  }, [buttonText, answerCorrect, toast]);

  const handleSetAnswer = (value: string) => {
    quizStoreInstance.setAnswer(value);
  };

  const handleOnNext = () => {
    if (quizStoreInstance.selectedAnswer === "") {
      return toast({
        title: "You forgot to answer!",
        position: "top",
      });
    }

    if (buttonText !== "Next") {
      const isAnswerCorrect =
        quizStoreInstance.selectedAnswer === currentQuiz?.answers.answer;
      setAnswerCorrect(isAnswerCorrect);
      setButtonText("Next");

      if (isAnswerCorrect) {
        quizStoreInstance.setUserResult(true);
      } else {
        quizStoreInstance.setUserResult(false);
      }

      return;
    }

    quizStoreInstance.setAnswer("");
    setQuizNumber(quizNumber + 1);
    setButtonText("Select");
    setAnswerCorrect("idle");
  };

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
              {currentQuiz ? (
                <QuizQuestion
                  question={currentQuiz.question}
                  answers={shuffledAnswers}
                  buttonText={buttonText}
                  handleOnChange={handleSetAnswer}
                  handleOnNext={handleOnNext}
                />
              ) : (
                <Loader />
              )}
            </>
          )}
        </MainContainer>
      </Section>
    </Suspense>
  );
});

export default QuizPage;
