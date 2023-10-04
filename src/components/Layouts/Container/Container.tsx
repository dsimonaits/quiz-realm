import { Container } from "@chakra-ui/react";
import React, { FC } from "react";

interface ICon {
  children: React.ReactNode;
  style?: object;
}

const MainContainer: FC<ICon> = ({ children, style }) => {
  return (
    <Container
      position="relative"
      mx="auto"
      px={["20px", "20px", "40px"]}
      maxWidth="1200px"
      {...style}
    >
      {children}
    </Container>
  );
};

export default MainContainer;
