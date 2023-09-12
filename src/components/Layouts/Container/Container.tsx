import { Container } from "@chakra-ui/react";
import React, { FC } from "react";

interface ICon {
  children: React.ReactNode;
}

const MainContainer: FC<ICon> = ({ children }) => {
  return (
    <Container mx="auto" px={["20px", "20px", "40px"]} maxWidth="1200px">
      {children}
    </Container>
  );
};

export default MainContainer;
