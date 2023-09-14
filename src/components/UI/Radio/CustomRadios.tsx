import { BoxProps, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { FC } from "react";

interface RadioProps {
  options: string[];
  onChange: (value: string) => void;
  stackStyle?: BoxProps;
}

const CustomRadios: FC<RadioProps> = ({ options, onChange, stackStyle }) => {
  const handleOptionChange = (value: string) => {
    onChange(value);
  };

  return (
    <RadioGroup onChange={handleOptionChange}>
      <Stack display="flex" {...stackStyle}>
        {options.map((option: string) => {
          return (
            <Radio key={option} value={option}>
              {option}
            </Radio>
          );
        })}
      </Stack>
    </RadioGroup>
  );
};

export default CustomRadios;
