import { Outlet } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Header from "../Header/Header";
import QuizStore from "../../../store/QuizStore";
import StartQuizBtn from "../../UI/StartQuizBtn/StartQuizBtn";
import { useTheme } from "../../../hooks/useTheme";
import { useEffect } from "react";

const MainLayout = observer(() => {
  const quizStoreInstance = QuizStore;
  const startQuiz = quizStoreInstance.startQuiz;
  const linkPath = "/quiz-page";
  const selectedCategory = QuizStore.selectedCategory;
  const { switchTheme } = useTheme();

  useEffect(() => {
    selectedCategory !== "" && switchTheme(selectedCategory);
  }, [selectedCategory, switchTheme]);

  const handleStartQuiz = async () => {
    const questions = quizStoreInstance.getQuestionsByCategoryAndTopics();
    quizStoreInstance.setNewQuizQuestions(questions);
    quizStoreInstance.setStartQuiz();
  };
  const handleEndQuiz = () => {
    quizStoreInstance.resetStore();
    quizStoreInstance.setStartQuiz();
  };

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {startQuiz ? (
        <StartQuizBtn
          onBtnClick={handleStartQuiz}
          onCloseClick={handleEndQuiz}
          linkPath={linkPath}
        />
      ) : null}
    </>
  );
});

export default MainLayout;
