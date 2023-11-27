import { Text, Flex, VStack, Box, HStack, Heading } from "@chakra-ui/react";
import React, { FC } from "react";
import { Ratio } from "./StatisticCircleBar.styled.js";
import { FaRegFaceGrinBeam, FaRegFaceFrownOpen } from "react-icons/fa6";

interface IStatistic {
  ratio: number;
}

const StatisticCircleBar: FC<IStatistic> = ({ ratio }) => {
  const segments = Array.from({ length: 100 }, (_, index) => index + 1);

  return (
    <VStack
      border="2px solid"
      borderColor="accent"
      minW={["220px", "300px", "300px"]}
      maxW={["400px"]}
      align="left"
      px="20px"
      py="10px"
      borderRadius="15px"
    >
      <Heading mb="10px" as="h3" fontSize={[20]}>
        Statistics
      </Heading>
      <Flex
        position="relative"
        width="150px"
        height="150px"
        mx="auto"
        backgroundColor="accent"
        borderRadius="50%"
      >
        <VStack
          color="secondary"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Box as="span" fontWeight="bold" fontSize={[30]}>
            {ratio}%
          </Box>
          <HStack fontSize={[18]}>
            <FaRegFaceGrinBeam />
            <Text>/</Text>
            <FaRegFaceFrownOpen />
          </HStack>
        </VStack>

        {segments.map((_, index) => (
          <Ratio key={index} $index={index} $ratio={ratio}></Ratio>
        ))}
      </Flex>
    </VStack>
  );
};

export default StatisticCircleBar;
