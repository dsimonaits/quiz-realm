import { FC, useMemo, useState } from "react";
import { Box, Text, useToast } from "@chakra-ui/react";
import CustomButton from "../Button/Button";
import StyledCustomRadios from "../Radio/StyledCustomRadios";
import useElementFinder from "../../../utils/useElementFinder";
import { IAnswer } from "../../../types/types";
import shuffleArray from "../../../utils/arrayUtils";

interface IQuizQuestion {
  question: string;
  answers: IAnswer;
  onClickHandler: (value: string) => void;
}

interface ISelectedAnswer {
  answer: string;
  selected: boolean;
}

const QuizQuestion: FC<IQuizQuestion> = ({
  question,
  answers,
  onClickHandler,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<ISelectedAnswer>({
    answer: "",
    selected: false,
  });

  const buttonText = selectedAnswer.selected === false ? "Select" : "Next";

  const toast = useToast();

  const shuffledAnswers: string[] = useMemo<string[]>(
    () => shuffleArray(Object.values(answers)),
    [answers]
  );

  const answersInputs = useElementFinder({
    dataSetName: "data-answer",
    dependencies: answers,
  });

  if (selectedAnswer.selected && answersInputs !== null) {
    answersInputs.map((answer) => {
      const dataAnswerValue = answer.getAttribute("data-answer");

      if (
        dataAnswerValue !== answers.answer &&
        dataAnswerValue === selectedAnswer.answer
      ) {
        answer.style.backgroundColor = "var(--wrongColor)";
        answer.style.color = "white";
      } else if (dataAnswerValue === selectedAnswer.answer) {
        answer.style.backgroundColor = "var(--correctColor)";
        answer.style.color = "white";
      } else if (dataAnswerValue === answers.answer) {
        answer.style.backgroundColor = "var(--correctColor)";
      } else if (
        dataAnswerValue !== answers.answer &&
        dataAnswerValue !== selectedAnswer.answer
      ) {
        answer.classList.add("fade-out");
      }
      answer.style.color = "white";
    });
  }

  const resetAnswer = () => {
    setSelectedAnswer({
      answer: "",
      selected: false,
    });
  };

  const handelSelectQuestion = (value: string) => {
    !selectedAnswer.selected &&
      setSelectedAnswer({ ...selectedAnswer, answer: value });
  };

  const handelOnBtnClick = (answer: string) => {
    if (selectedAnswer.answer && selectedAnswer.selected === false) {
      return setSelectedAnswer({ ...selectedAnswer, selected: true });
    }

    if (selectedAnswer.answer === "") {
      return toast({
        title: "You forgot to answer!",
        position: "top",
      });
    }

    onClickHandler(answer);
    resetAnswer();
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        p="20px"
        fontSize="1.5rem"
        width="100%"
        minH="5rem"
        bg="accent"
        color="secondary"
      >
        <Text>{question}</Text>
      </Box>
      <Box py="20px">
        <StyledCustomRadios
          options={shuffledAnswers}
          onChange={(e) => handelSelectQuestion(e)}
          stackStyle={{ alignItems: "flex-start", flexDirection: "column" }}
        />
        <CustomButton
          style={{ mt: "20px" }}
          onClickHandler={() => handelOnBtnClick(selectedAnswer.answer)}
        >
          {buttonText}
        </CustomButton>
      </Box>
    </>
  );
};

export default QuizQuestion;
