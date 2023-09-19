import { FC, ReactNode, useEffect, useState } from "react";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import QuizStore from "../../../store/QuizStore";
import QuizButton from "../../UI/Button/Button";
import CustomCheckboxes from "../../UI/CheckBox/CustomCheckBoxes";
import QuizModal from "../../UI/Modal/Modal";
import CustomButton from "../../UI/Button/Button";
import StyledCustomRadios from "../../UI/Radio/StyledCustomRadios";
import Toast from "../../UI/Toast/Toast";

type Learning = {
  children: ReactNode;
};

const StartLearning: FC<Learning> = observer(({ children }) => {
  const [allTopics, setAllTopics] = useState<string[]>([]);
  const [startLearning, setStartLearning] = useState(false);
  const [learningStep, setLearningStep] = useState(false);

  const quizStoreInstance = QuizStore;
  const toast = useToast();

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
  }, [startLearning, quizPageModalDisclosure, quizStoreInstance]);

  useEffect(() => {
    if (!selectedCategory) {
      return;
    }
    const topics = quizStoreInstance.getAllTopics(selectedCategory);
    setAllTopics(topics);
  }, [selectedCategory, quizStoreInstance]);

  const handleOnNext = () => {
    if (selectedCategory === "") {
      return Toast({
        toast,
        title: "Please select a category!",
        position: "top",
      });
    }

    if (selectedTopics.length === 0 && learningStep) {
      return Toast({
        toast,
        title: "Please select at least one topic!",
        position: "top",
      });
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
        styles={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {learningStep ? (
          <CustomCheckboxes
            allTopics={allTopics}
            onChange={handleCheckboxChange}
          />
        ) : (
          <StyledCustomRadios
            options={allCategories}
            onChange={handleRadioChange}
            stackStyle={{
              gap: "20px",
            }}
          />
        )}
        <CustomButton onClickHandler={handleOnNext}>Next</CustomButton>
      </QuizModal>
    </>
  );
});

export default StartLearning;
