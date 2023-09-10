import React from "react";
import { NavLink as ReactRouterLink } from "react-router-dom";
import {
  Link as ChakraLink,
  Flex,
  HStack,
  Heading,
  Hide,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Show,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import QuizButton from "../Button/Button";
import NavMobile from "../Navigation/Navigation";

const NavDesktop = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
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
      </ChakraLink>{" "}
      <Hide breakpoint="(max-width: 768px)">
        <HStack spacing="30px">
          <Nav links={Links} />
        </HStack>
        <QuizButton onClickHandler={() => console.log("I am login button")}>
          Login
        </QuizButton>
      </Hide>
      <Show breakpoint="(max-width: 768px)">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon w="40px" h="40px" />}
            variant="unstyled"
          />
          <MenuList
            display="flex"
            p="20px"
            flexDirection="column"
            alignItems="center"
          >
            <NavMobile links={Links} />
          </MenuList>
        </Menu>
      </Show>
    </Flex>
  );
};

export default NavDesktop;
