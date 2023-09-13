import React, { FC, ReactNode, useEffect, useState } from "react";
import { VStack, useDisclosure } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import QuizStore from "../../../store/QuizStore";
import QuizButton from "../../UI/Button/Button";
import CustomCheckboxes from "../../UI/CheckBox/CustomCheckBoxes";
import QuizModal from "../../UI/Modal/Modal";
import CustomRadios from "../../UI/Radio/CustomRadios";
import StartQuizBtn from "../../UI/StartQuizBtn/StartQuizBtn";

type Learning = {
  children: ReactNode;
};

const StartLearning: FC<Learning> = observer(({ children }) => {
  const [allTopics, setAllTopics] = useState<string[]>([]);
  const [startLearning, setStartLearning] = useState(false);
  const quizStoreInstance = QuizStore;

  const allCategories = quizStoreInstance.getAllCategories();
  const selectedCategory = quizStoreInstance.selectedCategory;

  const quizPageModalDisclosure = useDisclosure();

  useEffect(() => {
    if (startLearning) {
      quizStoreInstance.resetStore();
      setAllTopics([]);
      quizPageModalDisclosure.onOpen();
    }
    if (!quizPageModalDisclosure.isOpen) {
      setStartLearning(false);
    }
  }, [startLearning, quizPageModalDisclosure.isOpen]);

  useEffect(() => {
    if (!selectedCategory) {
      return;
    }
    const topics = quizStoreInstance.getAllTopics(selectedCategory);
    setAllTopics(topics);
  }, [selectedCategory]);

  const handleCheckboxChange = (topic: string[]) => {
    quizStoreInstance.setTopic(topic);
    quizPageModalDisclosure.onClose();
  };

  const handleRadioChange = (value: string) => {
    if (selectedCategory !== "") {
    }
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
    </>
  );
});

export default StartLearning;
