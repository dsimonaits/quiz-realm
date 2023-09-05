import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import QuizButton from "../components/UI/Button/Button";

const QuizPage = () => {
  const categoryParams = useParams();
  const navigate = useNavigate();
  return (
    <>
      <QuizButton onClickHandler={() => navigate(-1)}>Go back</QuizButton>
      <div>This is a "{categoryParams.id}" Quiz Page</div>;
    </>
  );
};

export default QuizPage;
