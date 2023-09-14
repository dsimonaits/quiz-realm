import React, { FC } from "react";
import cl from "./StartQuizBtn.module.css";
import { HiX } from "react-icons/hi";
import { NavLink as ReactRouterLink } from "react-router-dom";
import { Button, Link } from "@chakra-ui/react";

interface IStartQuizBtn {
  onBtnClick: () => void;
  onCloseClick: () => void;
  linkPath: string;
}

const StartQuizBtn: FC<IStartQuizBtn> = ({
  onBtnClick,
  onCloseClick,
  linkPath,
}) => {
  return (
    <div className={cl.overlay} onClick={() => {}}>
      <div className={cl.wrapper}>
        <div className={cl.close} onClick={() => onCloseClick()}>
          <HiX />
        </div>
        <Button
          to={linkPath}
          as={ReactRouterLink}
          className={[cl.StartQuizBtn, cl.glow].join(" ")}
          onClick={() => onBtnClick()}
          color="var(--secondaryColor)"
          bg="var(--mainColor)"
          _hover={{ color: "white" }}
        >
          Start Quiz
        </Button>
      </div>
    </div>
  );
};

export default StartQuizBtn;
