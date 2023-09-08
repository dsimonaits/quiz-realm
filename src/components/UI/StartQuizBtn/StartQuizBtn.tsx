import React, { FC } from "react";
import cl from "./StartQuizBtn.module.css";
import { HiX } from "react-icons/hi";

interface IStartQuizBtn {
  onBtnClick: () => void;
  onCloseClick: () => void;
}

const StartQuizBtn: FC<IStartQuizBtn> = ({ onBtnClick, onCloseClick }) => {
  return (
    <>
      <div className={cl.overlay} onClick={() => {}}>
        <div className={cl.wrapper}>
          <div className={cl.close} onClick={() => onCloseClick()}>
            <HiX />
          </div>
          <div
            className={[cl.backdrop, cl.glow].join(" ")}
            onClick={() => onBtnClick()}
          >
            <button className={cl.button}> Start Quiz</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartQuizBtn;
