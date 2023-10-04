import { HStack, VStack } from "@chakra-ui/react";
import { FC } from "react";
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
      <VStack justify="center" minHeight="400px" p="50px">
        <p>
          Good: {result.good} <br /> Fault: {result.fault}
        </p>
        <HStack justify="center" mt="20px">
          <CustomButton onClickHandler={btnHandle}>Complete</CustomButton>
        </HStack>
      </VStack>
    </>
  );
};

export default QuizResult;
