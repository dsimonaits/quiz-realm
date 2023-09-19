import { FC } from "react";
import { NavLink as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { ILink } from "../../../types/types";

interface NavProps {
  links: ILink[];
}

const Navigation: FC<NavProps> = ({ links }) => {
  return links.map((link: ILink) => (
    <ChakraLink
      as={ReactRouterLink}
      to={link.path}
      key={link.path}
      _activeLink={{ color: "quizMain.100", fontWeight: "bold" }}
      _hover={{ color: "quizMain.100" }}
    >
      {link.name}
    </ChakraLink>
  ));
};

export default Navigation;
