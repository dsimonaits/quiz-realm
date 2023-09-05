import { Box, Radio, RadioGroup, Stack, useRadio } from "@chakra-ui/react";
import { FC, useState } from "react";
import { ICategory } from "../../../types/types";
import QuizButton from "../../UI/Button/Button";

interface RadioProps {
  options: ICategory[];
  defaultValue: string;
  onChange: (value: any) => void;
}

const RadioCard: FC<RadioProps> = ({
  defaultValue,
  options,
  onChange,
}: any) => {
  return (
    <RadioGroup defaultValue={defaultValue} onChange={onChange}>
      <Stack justify="space-around" direction="row">
        {options.map((option: ICategory) => {
          return (
            <Radio
              colorScheme={option.colorScheme}
              key={option.name}
              value={option.name}
            >
              {option.name}
            </Radio>
          );
        })}
      </Stack>
    </RadioGroup>
  );
};

export default RadioCard;
