import { Box } from "@chakra-ui/react";
import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClickHandler: () => void;
  styles?: String;
}

const QuizButton: FC<ButtonProps> = ({ children, onClickHandler }) => {
  return (
    <Box
      as="button"
      //   w="78px"
      h="32px"
      px="20px"
      borderRadius="none"
      bg="transparent"
      border="1px solid"
      borderColor="quizMain.100"
      color="quizMain.100"
      _hover={{
        bg: "quizMain.100",
        color: "white",
      }}
      _active={{
        bg: "quizMain.100",
        color: "white",
      }}
      _focus={{
        boxShadow: "0 0 1px 2px quizMain.100",
      }}
      transition="var(--transition)"
      onClick={() => onClickHandler()}
    >
      {children}
    </Box>
  );
};

export default QuizButton;
