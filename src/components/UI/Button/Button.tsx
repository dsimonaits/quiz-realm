import { Box, BoxProps } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClickHandler: () => void;
  style?: BoxProps;
  className?: string;
}

const CustomButton: FC<ButtonProps> = ({
  children,
  onClickHandler,
  style,
  className,
}) => {
  return (
    <Box
      as="button"
      maxWidth="200px"
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
      {...style}
      className={className}
    >
      {children}
    </Box>
  );
};

export default CustomButton;
