import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { FC, useState } from "react";

interface RadioProps {
  options: string[];
  onChange: (value: string) => void;
}

const CustomRadios: FC<RadioProps> = ({ options, onChange }) => {
  const handleOptionChange = (value: string) => {
    onChange(value);
  };

  return (
    <RadioGroup
      display="flex"
      alignItems="center"
      flexDirection="column"
      gap="20px"
      onChange={handleOptionChange}
    >
      <Stack justify="space-around" direction="column">
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
