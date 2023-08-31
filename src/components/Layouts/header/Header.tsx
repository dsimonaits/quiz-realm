import React, { ElementType, FC, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Text,
  Divider,
  Show,
  Hide,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  StackProps,
} from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { NavLink as ReactRouterLink } from "react-router-dom";
import QuizButton from "../../UI/Button/Button";
import { HamburgerIcon } from "@chakra-ui/icons";

interface NavProps {
  links: ILink[];
}

interface ILink {
  name: string;
  path: string;
}
const Header = () => {
  const [ariaExpended, setAriaExpended] = useState(1);

  const Nav: FC<NavProps> = ({ links }) => {
    return links.map((link: ILink) => (
      <ChakraLink
        as={ReactRouterLink}
        to={link.path}
        key={link.path}
        _activeLink={{ color: "quizYellow.100", fontWeight: "bold" }}
        onClick={() => setAriaExpended(0)}
      >
        {link.name}
      </ChakraLink>
    ));
  };

  const Links = [
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
          <ChakraLink as={ReactRouterLink} to={"/"}>
            <Heading fontWeight="bold" fontSize="20">
              QuizRealm |<Text color="quizYellow.500"> JS and Beyond</Text>
            </Heading>
          </ChakraLink>{" "}
          <Hide breakpoint="(max-width: 768px)">
            <HStack spacing="60px">
              <Nav links={Links} />
            </HStack>
            <QuizButton>Login</QuizButton>
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
                opacity={ariaExpended === 0 ? "0" : "1"}
                visibility={ariaExpended === 0 ? "hidden" : "visible"}
                transform={ariaExpended === 0 ? "translateZ(0px)" : "none"}
              >
                <Nav links={Links} />
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
