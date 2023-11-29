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
        align="center"
        mx="auto"
        maxWidth={["300px", "400px", "500px"]}
        height="80vh"
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
            <Heading as="h1" fontSize={[20, 30, 30]} color="secondary">
              You score
            </Heading>
            <Box color="secondary" fontSize={25}>
              {" "}
              <Text>
                Good:{" "}
                <Box as="span" color="primary">
                  {result.good}
                </Box>
              </Text>
              <Text>
                Fault:{" "}
                <Box as="span" color="primary">
                  {result.fault}
                </Box>
              </Text>
            </Box>
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
