import React, { ElementType, FC, useState } from "react";
import { NavLink as ReactRouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  Divider,
  Show,
  Hide,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Navigation from "../../UI/Navigation/Navigation";
import QuizButton from "../../UI/Button/Button";

import Logo from "../../Logo/Logo";

const Header = () => {
  const Links = [
    { name: "Home", path: "/" },
    { name: "How it works", path: "how-it-works" },
    { name: "Features", path: "features" },
    { name: "About", path: "about" },
  ];

  return (
    <>
      <Box
        as="section"
        maxWidth="1200px"
        height="80px"
        pt="30px"
        px={["20px", "20px", "60px"]}
        m="auto"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Logo />
          <Hide breakpoint="(max-width: 768px)">
            <HStack spacing="30px">
              <Navigation links={Links} />
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
                <Navigation links={Links} />
              </MenuList>
            </Menu>
          </Show>
        </Flex>
      </Box>
      <Divider mt="6px" />
    </>
  );
};

export default Header;
