import { Box } from "@chakra-ui/react";
import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  styles?: String;
}

const QuizButton: FC<ButtonProps> = ({ children }) => {
  return (
    <Box
      as="button"
      //   w="78px"
      h="32px"
      px="20px"
      borderRadius="none"
      bg="transparent"
      border="1px solid #FCC822"
      color="#FCC822"
      _hover={{ bg: "#FCC822", color: "white" }}
      _active={{
        bg: "#FCC822",
        color: "white",
        transform: "scale(0.98)",
      }}
      _focus={{
        boxShadow:
          "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      }}
      transition="var(--transition)"
    >
      {children}
    </Box>
  );
};

export default QuizButton;
