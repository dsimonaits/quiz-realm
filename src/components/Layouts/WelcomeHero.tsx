import {
  Box,
  Heading,
  Image,
  VStack,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import React from "react";

const WelcomeHero = () => {
  return (
    <Box as="section" maxWidth="1200px" m="auto" px="60px">
      <Flex justifyContent="space-between">
        <VStack align="left" justify="center" gap="20px" flex="1">
          <Heading as="h3" size="xl">
            Question by Question, Mastery Awaits{" "}
          </Heading>
          <Text>| Achieve Your Goals with Us</Text>
          <Button w="200px">Start Solving</Button>
        </VStack>
        <Image src="hero.png" alt="people with question marks" flex="1" />
      </Flex>
    </Box>
  );
};

export default WelcomeHero;
