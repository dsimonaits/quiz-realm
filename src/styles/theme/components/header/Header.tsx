import React from "react";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Text,
  Divider,
  Link,
} from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { NavLink as ReactRouterLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Box
        as="section"
        maxWidth="1200px"
        height="80px"
        pt="30px"
        px="60px"
        m="auto"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <ChakraLink as={ReactRouterLink} to={"/"}>
            <Heading fontWeight="bold" fontSize="20">
              QuizRealm |<Text color="quizYellow.100"> JS and Beyond</Text>
            </Heading>
          </ChakraLink>{" "}
          <HStack spacing="60px">
            <ChakraLink
              as={ReactRouterLink}
              to={"how-it-works"}
              _activeLink={{ color: "quizYellow.100", fontWeight: "bold" }}
            >
              How it works
            </ChakraLink>{" "}
            <ChakraLink
              as={ReactRouterLink}
              to={"features"}
              _activeLink={{ color: "quizYellow.100", fontWeight: "bold" }}
            >
              Features
            </ChakraLink>{" "}
            <ChakraLink
              as={ReactRouterLink}
              to={"about"}
              _activeLink={{ color: "quizYellow.100", fontWeight: "bold" }}
            >
              About
            </ChakraLink>
          </HStack>
          <Box
            as="button"
            w="78px"
            h="32px"
            borderRadius="none"
            bg="transparent"
            border="1px solid #FCC822"
            color="#FCC822"
            _hover={{ bg: "#FCC822", color: "white" }}
            _active={{
              bg: "#FCC822",
              color: "white",
              transform: "scale(0.98)",
            }}
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}
            transition="var(--transition)"
          >
            Login
          </Box>
        </Flex>
      </Box>
      <Divider mt="6px" />
    </>
  );
};

export default Header;
