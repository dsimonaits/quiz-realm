import {
  HStack,
  VStack,
  Image,
  Box,
  Heading,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import CustomButton from "../Button/Button";
import { IResult } from "../../../types/types";
import ScoreImage from "../../../images/score.png";

interface IQuizResult {
  result: IResult;
  btnHandle: () => void;
}

const QuizResult: FC<IQuizResult> = ({ result, btnHandle }) => {
  return (
    <>
      <VStack
        justify="center"
        mx="auto"
        maxWidth={["300px", "400px", "500px"]}
        p="20px"
      >
        <Box position="relative">
          {" "}
          <Image src={ScoreImage} />
          <Flex
            direction="column"
            align="center"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <Heading as="h1" fontSize={[20, 30, 30]}>
              You score
            </Heading>
            <Text color="secondary">
              Good:{" "}
              <Box as="span" color="#32CD32">
                {result.good}
              </Box>
            </Text>
            <Text color="secondary">
              Fault:{" "}
              <Box as="span" color="#CD5C5C">
                {result.fault}
              </Box>
            </Text>
          </Flex>
        </Box>

        <HStack justify="center" mt="20px">
          <CustomButton onClickHandler={btnHandle}>Complete</CustomButton>
        </HStack>
      </VStack>
    </>
  );
};

export default QuizResult;
