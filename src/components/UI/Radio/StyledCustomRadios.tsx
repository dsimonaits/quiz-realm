import {
  useRadio,
  HStack,
  Box,
  useRadioGroup,
  BoxProps,
  UseRadioProps,
} from "@chakra-ui/react";
import { FC } from "react";

interface StyledCustomRadiosProps {
  options: string[];
  onChange: (value: string) => void;
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
        {props.children}
      </Box>
    </Box>
  );
};

const StyledCustomRadios: FC<StyledCustomRadiosProps> = ({
  options,
  onChange,
  stackStyle,
}) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "quizRealm",
    onChange: onChange,
  });

  const group = getRootProps();

  return (
    <HStack {...group} {...stackStyle}>
      {options.map((value: string) => {
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
