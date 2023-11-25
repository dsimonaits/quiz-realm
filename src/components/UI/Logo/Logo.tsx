import { NavLink as ReactRouterLink } from "react-router-dom";
import { Box, Link as ChakraLink, Heading } from "@chakra-ui/react";

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
        QuizRealm |
        <Box as="span" color="accent">
          {" "}
          JS and Beyond
        </Box>
      </Heading>
    </ChakraLink>
  );
};

export default Logo;
