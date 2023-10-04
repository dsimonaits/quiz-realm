import { HStack, VStack } from "@chakra-ui/react";
import { FC } from "react";
import CustomButton from "../Button/Button";
import MainContainer from "../../Layouts/Container/Container";

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
    <MainContainer
      style={{
        minHeight: "400px",
        p: "50px",
      }}
    >
      <VStack align="center">
        <p>
          Good: {result.good} <br /> Fault: {result.fault}
        </p>
        <HStack justify="center" gap="20px">
          <CustomButton onClickHandler={btnHandle}>Complete</CustomButton>
        </HStack>
      </VStack>
    </MainContainer>
  );
};

export default QuizResult;
