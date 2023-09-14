import { HStack } from "@chakra-ui/react";
import React, { FC } from "react";
import QuizModal from "../Modal/Modal";
import CustomButton from "../Button/Button";

interface IResult {
  good: number;
  fault: number;
}

interface IQuizResult {
  result: IResult;
  btnHandle: () => void;
}

const QuizResult: FC<IQuizResult> = ({ result, btnHandle }) => {
  return (
    <>
      <p>
        Good: {result.good} <br /> Fault:
        {result.fault}{" "}
      </p>
      <HStack justify="center" gap="20px">
        <CustomButton onClickHandler={btnHandle}>Complete</CustomButton>
      </HStack>
    </>
  );
};

export default QuizResult;
