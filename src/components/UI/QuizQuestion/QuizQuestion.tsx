import React, { FC } from "react";
import CustomRadios from "../Radio/CustomRadios";
import { Box, Text } from "@chakra-ui/react";
import CustomButton from "../Button/Button";

interface IQuizQuestion {
  question: string;
  answers: string[];
  handleOnChange: (value: string) => void;
  handleOnNext: () => void;
}

const QuizQuestion: FC<IQuizQuestion> = ({
  question,
  answers,
  handleOnChange,
  handleOnNext,
}) => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        p="20px"
        fontSize="1.5rem"
        width="100%"
        minH="5rem"
        bg="var(--secondaryColor)"
        color="white"
      >
        <Text>{question}</Text>
      </Box>
      <Box py="20px">
        <CustomRadios options={answers} onChange={handleOnChange} />
        <CustomButton style={{ mt: "20px" }} onClickHandler={handleOnNext}>
          Next
        </CustomButton>
      </Box>
    </>
  );
};

export default QuizQuestion;
