import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { FC, useState } from "react";
import QuizButton from "../Button/Button";

interface RadioProps {
  options: string[];
  onChange: (value: any) => void;
}

const CustomRadios: FC<RadioProps> = ({ options, onChange }) => {
  const [option, setOption] = useState("");
  return (
    <RadioGroup
      display="flex"
      alignItems="center"
      flexDirection="column"
      onChange={setOption}
      gap="20px"
    >
      <Stack justify="space-around" direction="row">
        {options.map((option: string) => {
          return (
            <Radio key={option} value={option}>
              {option}
            </Radio>
          );
        })}
      </Stack>
      <QuizButton
        onClickHandler={() => {
          if (!option) {
            return alert("Please choose option");
          }
          onChange(option);
        }}
      >
        Next
      </QuizButton>
    </RadioGroup>
  );
};

export default CustomRadios;
