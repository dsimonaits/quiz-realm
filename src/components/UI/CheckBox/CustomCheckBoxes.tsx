import { Flex, Text, VStack, chakra, useCheckbox } from "@chakra-ui/react";
import { HiX } from "react-icons/hi";
import React, { FC, useState } from "react";
import { observer } from "mobx-react-lite";

interface ICheckbox {
  allTopics: string[];
  onChange: (value: any) => void;
}

const CustomCheckboxes: FC<ICheckbox> = observer(({ allTopics, onChange }) => {
  const [checked, setChecked] = useState<string[]>([]);
  const handleCheckboxChange = (topic: string) => {
    if (checked.includes(topic)) {
      setChecked(checked.filter((r) => r !== topic));
    } else {
      setChecked([...checked, topic]);
    }
  };

  return (
    <VStack>
      <Flex gap="10px" wrap="wrap">
        {allTopics.map((topic) => {
          const {
            state,
            getCheckboxProps,
            getInputProps,
            getLabelProps,
            htmlProps,
          } = useCheckbox();
          return (
            <chakra.label
              key={topic}
              onChange={() => {
                handleCheckboxChange(topic);
                onChange(topic);
              }}
              position="relative"
              display="flex"
              flexDirection="row"
              alignItems="center"
              gridColumnGap={2}
              maxW="auto"
              bg={state.isChecked ? "var(--secondaryColor)" : "var(--bg)"}
              border="1px solid"
              borderColor="var(--bg)"
              px={3}
              py={1}
              pr="3rem"
              fontFamily="var(--secondaryFont)"
              fontSize="1.1rem"
              fontWeight="medium"
              cursor="pointer"
              transition="var(--transition)"
              {...htmlProps}
            >
              <input {...getInputProps()} hidden />
              <Text color="gray.700" {...getLabelProps()}>
                {topic}
              </Text>
              <Flex
                opacity={state.isChecked ? 1 : 0}
                position="absolute"
                top="0"
                right="0"
                alignItems="center"
                justifyContent="center"
                borderColor="var(--mainColor)"
                bg="var(--mainColor)"
                color="white"
                w="2rem"
                h="100%"
                transition="var(--transition)"
                {...getCheckboxProps()}
              >
                <Text>
                  <HiX />
                </Text>
              </Flex>
            </chakra.label>
          );
        })}
      </Flex>
    </VStack>
  );
});

export default CustomCheckboxes;
