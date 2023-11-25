import { ScaleFade } from "@chakra-ui/react";
import React, { FC } from "react";

interface IScale {
  children: React.ReactNode;
}

const ScaleFadeComponent: FC<IScale> = ({ children }) => {
  return (
    <ScaleFade
      in={true}
      style={{ position: "relative" }}
      transition={{ exit: { delay: 1 }, enter: { duration: 0.5 } }}
    >
      {children}
    </ScaleFade>
  );
};

export default ScaleFadeComponent;
