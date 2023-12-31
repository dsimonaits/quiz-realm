import { FC, ReactNode, useState } from "react";
import { useDisclosure, useToast } from "@chakra-ui/react";
import QuizStore from "../../../store/QuizStore";
import QuizButton from "../../UI/Button/Button";
import CustomCheckboxes from "../../UI/CheckBox/CustomCheckBoxes";
import QuizModal from "../../UI/Modal/Modal";
import CustomButton from "../../UI/Button/Button";
import StyledCustomRadios from "../../UI/Radio/StyledCustomRadios";
import Toast from "../../UI/Toast/Toast";
import { Categories } from "../../../types/types";
import UserStore from "../../../store/UserStore";

type Learning = {
  children: ReactNode;
};

const StartLearning: FC<Learning> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedCategory, setSelectedCategory] =
    useState<Categories>("JavaScript");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const quizStoreInstance = QuizStore;
  const toast = useToast();

  const steps = [
    {
      title: "Choose your category",
      component: (
        <StyledCustomRadios
          options={quizStoreInstance.getAllCategories()}
          defaultValue={selectedCategory}
          onChange={(value) => {
            setSelectedCategory(value);
          }}
          stackStyle={{
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        />
      ),
    },
    {
      title: "Choose your favorite topics",
      component: (
        <CustomCheckboxes
          allTopics={quizStoreInstance.getAllTopics(selectedCategory)}
          onChange={(topic) => {
            if (selectedTopics.includes(topic)) {
              setSelectedTopics(selectedTopics.filter((r) => r !== topic));
            } else {
              setSelectedTopics([...selectedTopics, topic]);
            }
          }}
        />
      ),
    },
  ];

  const currentStepData = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  const quizPageModalDisclosure = useDisclosure();

  const handleOnNext = () => {
    if (currentStepData.component === undefined) {
      return;
    }

    if (
      currentStepData.title === "Choose your favorite topics" &&
      selectedTopics.length === 0
    ) {
      return Toast({
        toast,
        title: "Please select at least one topic!",
        position: "top",
      });
    }

    if (isLastStep) {
      quizStoreInstance.setCategory(selectedCategory);
      quizStoreInstance.setTopics(selectedTopics);
      quizStoreInstance.setStartQuiz();
      quizPageModalDisclosure.onClose();
      UserStore.fetchUserProgress();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const onStartLearning = async () => {
    await QuizStore.getAllQuestions();
    setCurrentStep(0);
    setSelectedCategory("JavaScript");
    setSelectedTopics([]);
    quizPageModalDisclosure.onOpen();
  };

  return (
    <>
      <QuizButton onClickHandler={onStartLearning}>{children}</QuizButton>
      <QuizModal
        disclosure={quizPageModalDisclosure}
        modalTitle={currentStepData.title}
        styles={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {currentStepData.component}
        <CustomButton onClickHandler={handleOnNext}>
          {isLastStep ? "Start Learning" : "Next"}
        </CustomButton>
      </QuizModal>
    </>
  );
};

export default StartLearning;
