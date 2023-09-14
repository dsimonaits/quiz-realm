import React, { FC, ReactNode, useEffect, useState } from "react";
import { VStack, useDisclosure } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import QuizStore from "../../../store/QuizStore";
import QuizButton from "../../UI/Button/Button";
import CustomCheckboxes from "../../UI/CheckBox/CustomCheckBoxes";
import QuizModal from "../../UI/Modal/Modal";
import CustomRadios from "../../UI/Radio/CustomRadios";
import CustomButton from "../../UI/Button/Button";

type Learning = {
  children: ReactNode;
};

const StartLearning: FC<Learning> = observer(({ children }) => {
  const [allTopics, setAllTopics] = useState<string[]>([]);
  const [startLearning, setStartLearning] = useState(false);
  const [learningStep, setLearningStep] = useState(false);

  const quizStoreInstance = QuizStore;

  const allCategories = quizStoreInstance.getAllCategories();
  const selectedCategory = quizStoreInstance.selectedCategory;
  const selectedTopics = quizStoreInstance.selectedTopics;

  const quizPageModalDisclosure = useDisclosure();

  useEffect(() => {
    if (startLearning) {
      quizStoreInstance.resetStore();
      setAllTopics([]);
      quizPageModalDisclosure.onOpen();
    }
    if (!quizPageModalDisclosure.isOpen) {
      setStartLearning(false);
      setLearningStep(false);
    }
  }, [startLearning, quizPageModalDisclosure.isOpen]);

  useEffect(() => {
    if (!selectedCategory) {
      return;
    }
    const topics = quizStoreInstance.getAllTopics(selectedCategory);
    setAllTopics(topics);
  }, [selectedCategory]);

  const handleOnNext = () => {
    if (selectedCategory === "") {
      return alert("Please select a category");
    }

    if (selectedTopics.length === 0 && learningStep) {
      return alert("Please select at least one topic");
    }

    if (selectedCategory !== "" && selectedTopics.length > 0) {
      quizStoreInstance.setStartQuiz();
      quizPageModalDisclosure.onClose();
    }

    setLearningStep(true);
  };

  const handleCheckboxChange = (topic: string) => {
    quizStoreInstance.setTopic(topic);
  };

  const handleRadioChange = (value: string) => {
    quizStoreInstance.setCategory(value);
  };

  return (
    <>
      <QuizButton
        onClickHandler={() => {
          setStartLearning(true);
        }}
      >
        {children}
      </QuizButton>
      <QuizModal
        disclosure={quizPageModalDisclosure}
        modalTitle={
          selectedCategory
            ? "Choose your favorite topics"
            : "Choose your category"
        }
      >
        {learningStep ? (
          <CustomCheckboxes
            allTopics={allTopics}
            onChange={handleCheckboxChange}
          />
        ) : (
          <VStack gap="20px">
            <CustomRadios
              options={allCategories}
              onChange={handleRadioChange}
            />
          </VStack>
        )}
        <CustomButton onClickHandler={handleOnNext}>Next</CustomButton>
      </QuizModal>
    </>
  );
});

export default StartLearning;
