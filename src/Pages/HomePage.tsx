import { FC } from "react";
import Welcome from "../components/Layouts/Welcome/Welcome";
import StartLearning from "../components/form/StartLearning/StartLearning";
import Section from "../components/Layouts/Section/Section";
import MainContainer from "../components/Layouts/Container/Container";
import QuizStore from "../store/QuizStore";
import StartQuizBtn from "../components/UI/StartQuizBtn/StartQuizBtn";
import { observer } from "mobx-react-lite";

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
  );
});

export default HomePage;
