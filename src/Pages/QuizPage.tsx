import { useEffect, useState } from "react";
import { Box, ScaleFade, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { IQuiz, IResult } from "../types/types";
import QuizStore from "../store/QuizStore";
import UserStore from "../store/UserStore";
import Section from "../components/Layouts/Section/Section";
import MainContainer from "../components/Layouts/Container/Container";
import Loader from "../components/UI/Loader/Loader";
import { lazy, Suspense } from "react";

const QuizResult = lazy(() => import("../components/UI/QuizResult/QuizResult"));
const QuizQuestion = lazy(
  () => import("../components/UI/QuizQuestion/QuizQuestion")
);

const QuizPage = observer(() => {
  const [quizNumber, setQuizNumber] = useState(0);
  const [currentQuiz, setCurrentQuiz] = useState<IQuiz | null>(null);
  const [result, setResult] = useState<IResult>({ good: 0, fault: 0 });
  const [showResult, setShowResult] = useState(false);

  const quizzes = QuizStore.StartQuizData;

  const navigate = useNavigate();

  useEffect(() => {
    quizzes.length === 0 ? navigate("/") : setCurrentQuiz(quizzes[quizNumber]);

    if (quizzes.length < quizNumber + 1) {
      setShowResult(true);
      return;
    }
  }, [quizNumber, navigate, quizzes]);

  const handleOnNext = (selectedAnswer: string) => {
    const isAnswerCorrect = selectedAnswer === currentQuiz?.answers.answer;

    isAnswerCorrect
      ? setResult((prevState) => ({ ...prevState, good: prevState.good + 1 }))
      : setResult((prevState) => ({
          ...prevState,
          fault: prevState.fault + 1,
        }));

    setQuizNumber((prev) => prev + 1);
  };

  const handleComplete = () => {
    UserStore.setUserResult(result);
    QuizStore.resetStore();
    navigate("/");
  };

  return (
    <Suspense fallback={<Loader />}>
      <Section>
        <MainContainer>
          <ScaleFade
            in={!!currentQuiz || showResult}
            style={{ position: "relative" }}
            transition={{ exit: { delay: 1 }, enter: { duration: 0.5 } }}
          >
            {showResult ? (
              <QuizResult result={result} btnHandle={handleComplete} />
            ) : (
              <>
                {currentQuiz ? (
                  <>
                    <Box p="10px">
                      <Text fontSize="md">
                        Question{" "}
                        {quizNumber < quizzes.length
                          ? quizNumber + 1
                          : quizzes.length}{" "}
                        of {quizzes.length}
                      </Text>
                    </Box>
                    <QuizQuestion
                      question={currentQuiz.question}
                      answers={currentQuiz.answers}
                      onClickHandler={handleOnNext}
                    />
                  </>
                ) : (
                  <Loader />
                )}
              </>
            )}
          </ScaleFade>
        </MainContainer>
      </Section>
    </Suspense>
  );
});

export default QuizPage;
