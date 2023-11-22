/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useRadio,
  HStack,
  Box,
  useRadioGroup,
  BoxProps,
  UseRadioProps,
} from "@chakra-ui/react";
import { FC } from "react";
import { Categories } from "../../../types/types";

interface StyledCustomRadiosProps<T> {
  options: T[];
  onChange: (value: T) => void;
  defaultValue?: T;
  stackStyle?: BoxProps;
}

interface RadioCardProps extends UseRadioProps {
  children: React.ReactNode;
}

const RadioCard: FC<RadioCardProps> = (props) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        data-answer={props.children}
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        transition="var(--transition)"
        _checked={{
          bg: "accent",
          color: "secondary",
          borderColor: "background",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};

const StyledCustomRadios: FC<StyledCustomRadiosProps<any>> = ({
  options,
  onChange,
  defaultValue,
  stackStyle,
}) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "quizRealm",
    onChange: onChange,
    defaultValue: defaultValue,
  });

  const group = getRootProps();

  return (
    <HStack {...group} {...stackStyle}>
      {options.map((value: Categories | string) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
};

export default StyledCustomRadios;
