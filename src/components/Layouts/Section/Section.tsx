import { Box } from "@chakra-ui/react";
import React, { FC } from "react";

interface ISection {
  children: React.ReactNode;
}

const Section: FC<ISection> = ({ children }) => {
  return (
    <Box as="section" py={["20px", "20px", "20px"]}>
      {children}
    </Box>
  );
};

export default Section;
