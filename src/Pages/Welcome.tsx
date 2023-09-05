import React, { useState } from "react";
import WelcomeHero from "../components/Layouts/WelcomeHero";
import QuizModal from "../components/UI/Modal/Modal";
import RadioCard from "../components/Layouts/radioCard/RadioCard";
import { ICategory } from "../types/types";
import QuizButton from "../components/UI/Button/Button";
import { VStack, useDisclosure } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

const options: ICategory[] = [
  { name: "Javascript", colorScheme: "quizMain" },
  { name: "React", colorScheme: "quizReact" },
  { name: "NodeJS", colorScheme: "quizNode" },
];

const Welcome = () => {
  const [categoryValue, setCategoryValue] = useState("JavasScript");
  const modalDisclosure = useDisclosure();

  const newPath = useNavigate();
  const location = useLocation();

  return (
    <>
      <WelcomeHero>
        <QuizModal
          disclosure={modalDisclosure}
          modalTitle="Choose your Quiz category"
          buttonName="Start Solving"
        >
          <VStack gap="20px">
            <RadioCard
              defaultValue={categoryValue}
              options={options}
              onChange={setCategoryValue}
            />
            <QuizButton
              onClickHandler={() =>
                newPath(`${location.pathname}category/${categoryValue}`)
              }
            >
              OK
            </QuizButton>
          </VStack>
        </QuizModal>
      </WelcomeHero>
    </>
  );
};

export default Welcome;
