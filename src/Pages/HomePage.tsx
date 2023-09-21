import { lazy, Suspense } from "react";
import { FC } from "react";
import { observer } from "mobx-react-lite";
import QuizStore from "../store/QuizStore";
import Welcome from "../components/Layouts/Welcome/Welcome";
import Section from "../components/Layouts/Section/Section";
import MainContainer from "../components/Layouts/Container/Container";
import StartQuizBtn from "../components/UI/StartQuizBtn/StartQuizBtn";
import Loader from "../components/UI/Loader/Loader";

const StartLearning = lazy(
  () => import("../components/form/StartLearning/StartLearning")
);

const HomePage: FC = observer(() => {
  const quizStoreInstance = QuizStore;
  const startQuiz = quizStoreInstance.startQuiz;

  const linkPath = "/quiz-page";

  const handleStartQuiz = async () => {
    const questions = quizStoreInstance.getQuestionsByCategoryAndTopics();
    quizStoreInstance.setStartQuizData(questions);
    quizStoreInstance.resetStore();
    quizStoreInstance.setStartQuiz();
  };

  const handleEndQuiz = () => {
    quizStoreInstance.resetStore();
    quizStoreInstance.setStartQuiz();
  };

  return (
    <Suspense fallback={<Loader />}>
      <Section>
        <MainContainer>
          <Welcome>
            <StartLearning>Start Learning</StartLearning>
          </Welcome>
        </MainContainer>
        {startQuiz && (
          <StartQuizBtn
            onBtnClick={handleStartQuiz}
            onCloseClick={handleEndQuiz}
            linkPath={linkPath}
          />
        )}
      </Section>
    </Suspense>
  );
});

export default HomePage;
