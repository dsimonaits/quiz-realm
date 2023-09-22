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
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const quizStoreInstance = QuizStore;
  const toast = useToast();

  const steps = [
    {
      title: "Choose your category",
      component: (
        <StyledCustomRadios
          options={quizStoreInstance.getAllCategories()}
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
    // Add more steps as needed
  ];

  const currentStepData = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  const quizPageModalDisclosure = useDisclosure();

  useEffect(() => {
    if (currentStep === 0) {
      setSelectedCategory("");
    }
  }, [currentStep]);

  const handleOnNext = () => {
    if (currentStepData.component === undefined) {
      return;
    }

    if (
      currentStepData.title === "Choose your category" &&
      selectedCategory === ""
    ) {
      return Toast({
        toast,
        title: "Please select a category!",
        position: "top",
      });
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
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <>
      <QuizButton
        onClickHandler={() => {
          setCurrentStep(0);
          setSelectedCategory("");
          setSelectedTopics([]);
          quizPageModalDisclosure.onOpen();
        }}
      >
        {children}
      </QuizButton>
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
});

export default StartLearning;
