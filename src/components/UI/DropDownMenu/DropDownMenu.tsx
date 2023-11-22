import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

interface DropdownProps {
  items: string[];
  handleChange: (item: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ items, handleChange }) => {
  return (
    <Menu>
      <MenuButton as={Button}>Change Theme</MenuButton>
      <MenuList>
        {items.map((item) => (
          <MenuItem key={item} onClick={() => handleChange(item)}>
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Dropdown;
