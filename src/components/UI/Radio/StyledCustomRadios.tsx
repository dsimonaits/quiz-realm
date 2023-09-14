import {
  useRadio,
  HStack,
  Box,
  useRadioGroup,
  BoxProps,
} from "@chakra-ui/react";
import React, { FC } from "react";

interface StyledCustomRadiosProps {
  options: string[];
  onChange: (value: string) => void;
  stackStyle?: BoxProps;
}

const StyledCustomRadios: FC<StyledCustomRadiosProps> = ({
  options,
  onChange,
  stackStyle,
}) => {
  const { getRootProps, getRadioProps: getGroupRadioPops } = useRadioGroup({
    name: "quizRealm",
    onChange: onChange,
  });

  const group = getRootProps();

  return (
    <HStack {...group} {...stackStyle}>
      {options.map((value: string) => {
        const radio = getGroupRadioPops({ value });
        const { getInputProps, getRadioProps } = useRadio(radio);
        const input = getInputProps();
        const checkbox = getRadioProps();

        return (
          <Box as="label" key={value}>
            <input {...input} />
            <Box
              {...checkbox}
              cursor="pointer"
              borderWidth="1px"
              borderRadius="md"
              boxShadow="md"
              _checked={{
                bg: "quizMain.600",
                color: "white",
                borderColor: "teal.600",
              }}
              _focus={{
                boxShadow: "outline",
              }}
              px={5}
              py={3}
            >
              {value}
            </Box>
          </Box>
        );
      })}
    </HStack>
  );
};

export default StyledCustomRadios;
