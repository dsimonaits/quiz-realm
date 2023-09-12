import React from "react";
import { NavLink as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, Heading, Text } from "@chakra-ui/react";

const Logo = () => {
  return (
    <ChakraLink
      as={ReactRouterLink}
      to={"/"}
      _hover={{
        textDecorationColor: "none",
        textDecorationStyle: "none",
      }}
    >
      <Heading fontWeight="bold" fontSize="20">
        QuizRealm |<Text color="quizMain.100"> JS and Beyond</Text>
      </Heading>
    </ChakraLink>
  );
};

export default Logo;
