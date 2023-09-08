import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { VStack, useDisclosure } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import QuizStore from "../../../store/QuizStore";
import QuizButton from "../../UI/Button/Button";
import CustomCheckboxes from "../../UI/CheckBox/CustomCheckBoxes";
import QuizModal from "../../UI/Modal/Modal";
import CustomRadios from "../../UI/Radio/CustomRadios";
import StartQuizBtn from "../../UI/StartQuizBtn/StartQuizBtn";

const StartLearning = observer(() => {
  const [allTopics, setAllTopics] = useState<string[]>([]);
  const [startLearning, setStartLearning] = useState(false);
  const quizStoreInstance = QuizStore;

  const allCategories = quizStoreInstance.getAllCategories();
  const selectedCategory: string = quizStoreInstance.selectedCategory;
  const selectedTopics = quizStoreInstance.selectedTopics;

  const quizPageModalDisclosure = useDisclosure();

  useEffect(() => {
    if (startLearning) {
      quizPageModalDisclosure.onOpen();
    }
    if (!quizPageModalDisclosure.isOpen) {
      setStartLearning(false);
    }
    setAllTopics([]);
    quizStoreInstance.resetStore;
  }, [startLearning, quizPageModalDisclosure.isOpen]);

  useEffect(() => {
    if (selectedCategory) {
      const topics = quizStoreInstance.getAllTopics(selectedCategory);
      setAllTopics(topics);
    }
  }, [selectedCategory]);

  const handleCheckboxChange = (topic: string[]) => {
    quizStoreInstance.setTopic(topic);
    quizPageModalDisclosure.onClose();
  };

  const handleRadioChange = (value: string) => {
    quizStoreInstance.setCategory(value);
  };

  const handleStartQuiz = async () => {
    const questions = quizStoreInstance.getQuestionsByCategoryAndTopics();
    quizStoreInstance.setStartQuizData(questions);
  };

  const handleEndQuiz = () => {
    quizStoreInstance.resetStore();
  };

  return (
    <>
      <QuizButton
        onClickHandler={() => {
          setStartLearning(true);
          console.log(selectedTopics, selectedCategory);
        }}
      >
        Start Learning
      </QuizButton>
      <QuizModal
        disclosure={quizPageModalDisclosure}
        modalTitle={
          selectedCategory
            ? "Choose your favorite topics"
            : "Choose your category"
        }
      >
        {allTopics.length !== 0 ? (
          <CustomCheckboxes
            allTopics={allTopics}
            onSubmit={handleCheckboxChange}
          />
        ) : (
          <VStack gap="20px">
            <CustomRadios
              options={allCategories}
              onChange={handleRadioChange}
            />
          </VStack>
        )}
      </QuizModal>
      {selectedTopics.length > 0 && selectedCategory.length > 0 && (
        <StartQuizBtn
          onBtnClick={handleStartQuiz}
          onCloseClick={handleEndQuiz}
        />
      )}
    </>
  );
});

export default StartLearning;
