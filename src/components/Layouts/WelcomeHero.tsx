import {
  Box,
  Heading,
  Image,
  VStack,
  Text,
  Button,
  Flex,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import QuizButton from "../UI/Button/Button";

const WelcomeHero = () => {
  return (
    <Box
      as="section"
      maxWidth="1200px"
      m="auto"
      px={["20px", "20px", "60px"]}
      pt="66px"
    >
      <Flex
        justifyContent="space-between"
        flexDirection={["column", "column", "row"]}
      >
        <Stack
          gap="20px"
          flex="1"
          alignItems={["center", "center", "flex-start"]}
        >
          <Heading as="h3" size="xl">
            Question by Question, Mastery Awaits{" "}
          </Heading>
          <Text>Achieve Your Goals with Us</Text>
          <QuizButton>Start Solving</QuizButton>
        </Stack>
        <Image
          src="hero.png"
          alt="people with question marks"
          // flex="1"
          height="auto"
        />
      </Flex>
    </Box>
  );
};

export default WelcomeHero;
