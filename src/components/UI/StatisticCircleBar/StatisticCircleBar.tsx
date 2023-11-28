import { Text, Flex, VStack, Box, HStack, Heading } from "@chakra-ui/react";
import React, { FC } from "react";
import { Ratio } from "./StatisticCircleBar.styled.js";
import { FaRegFaceGrinBeam, FaRegFaceFrownOpen } from "react-icons/fa6";

interface IStatistic {
  ratio: number;
}

const StatisticCircleBar: FC<IStatistic> = React.memo(({ ratio }) => {
  const segmentsCount = 50;
  const completedSegments = Math.floor((ratio / 100) * segmentsCount);

  const segments = Array.from({ length: segmentsCount }, (_, index) => ({
    angle: (360 / segmentsCount) * (index + 1),
    color: index < completedSegments ? "var(--primary)" : "var(--secondary)",
  }));

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

        {segments.map((segment, index) => (
          <Ratio
            key={index}
            $index={index}
            $ratio={ratio}
            $deg={segment.angle}
            $color={segment.color}
          ></Ratio>
        ))}
      </Flex>
    </VStack>
  );
});

export default StatisticCircleBar;
