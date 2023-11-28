import {
  Flex,
  HStack,
  Show,
  Hide,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Navigation from "../../UI/Navigation/Navigation";

import Logo from "../../UI/Logo/Logo";
import Section from "../Section/Section";
import MainContainer from "../Container/Container";
import UserStore from "../../../store/UserStore";
import CustomButton from "../../UI/Button/Button";

const Header = () => {
  const Links = [
    { name: "Quiz", path: "/" },
    { name: "How it works", path: "how-it-works" },
    { name: "About", path: "about" },
    { name: "My Dashboard", path: "dashboard" },
  ];

  const handleLogout = () => {
    UserStore.logout();
  };

  return (
    <>
      <Section style={{ pb: ["0px", "0px", "0px"] }}>
        <MainContainer>
          <Flex justifyContent="space-between" alignItems="center">
            <Logo />
            <Hide breakpoint="(max-width: 900px)">
              <HStack spacing="30px">
                <Navigation links={Links} />
                <CustomButton onClickHandler={handleLogout}>
                  Logout
                </CustomButton>
              </HStack>
            </Hide>
            <Show breakpoint="(max-width: 900px)">
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
                  <Navigation links={Links} isMenu={true} />
                  <CustomButton
                    style={{ mt: "10px" }}
                    onClickHandler={handleLogout}
                  >
                    LogOut
                  </CustomButton>
                </MenuList>
              </Menu>
            </Show>
          </Flex>
        </MainContainer>
      </Section>
    </>
  );
};

export default Header;
