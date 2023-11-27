import { Box, BoxProps } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClickHandler?: () => void;
  style?: BoxProps;
  className?: string;
  attributes?: object;
}

const CustomButton: FC<ButtonProps> = ({
  children,
  onClickHandler,
  style,
  className,
  attributes,
}) => {
  return (
    <Box
      as="button"
      display="flex"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      maxWidth="200px"
      h="32px"
      px="20px"
      borderRadius="none"
      bg="transparent"
      border="1px solid"
      borderColor="accent"
      color="accent"
      transition="all 250ms ease-in"
      _hover={{
        bg: "accent",
        color: "secondary",
      }}
      _active={{
        bg: "accent",
        color: "secondary",
      }}
      _focus={{
        boxShadow: "0 0 1px 2px accent",
      }}
      onClick={() => (onClickHandler ? onClickHandler() : null)}
      {...style}
      {...attributes}
      className={className}
    >
      {children}
    </Box>
  );
};

export default CustomButton;
