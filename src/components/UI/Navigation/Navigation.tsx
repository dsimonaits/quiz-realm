import { FC } from "react";
import { NavLink as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, MenuItem } from "@chakra-ui/react";
import { ILink } from "../../../types/types";

interface NavProps {
  links: ILink[];
  isMenu?: boolean;
}

const Navigation: FC<NavProps> = ({ links, isMenu = false }) => {
  return (
    <>
      {!isMenu
        ? links.map((link: ILink) => (
            <ChakraLink
              as={ReactRouterLink}
              to={link.path}
              key={link.name}
              _activeLink={{ color: "accent", fontWeight: "bold" }}
              _hover={{ color: "accent" }}
            >
              {link.name}
            </ChakraLink>
          ))
        : links.map((link: ILink) => (
            <MenuItem display="block" p="0" key={link.name}>
              <ChakraLink
                p="6px 12px 6px 12px"
                as={ReactRouterLink}
                display="block"
                to={link.path}
                _activeLink={{ color: "accent", fontWeight: "bold" }}
                _hover={{ color: "accent" }}
              >
                {link.name}
              </ChakraLink>
            </MenuItem>
          ))}
    </>
  );
};

export default Navigation;
