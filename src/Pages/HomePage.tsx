import { lazy, Suspense, useEffect } from "react";
import { FC } from "react";
import Welcome from "../components/Layouts/Welcome/Welcome";
import Section from "../components/Layouts/Section/Section";
import MainContainer from "../components/Layouts/Container/Container";
import Loader from "../components/UI/Loader/Loader";
import { ScaleFade } from "@chakra-ui/react";
import QuizStore from "../store/QuizStore";

const StartLearning = lazy(
  () => import("../components/form/StartLearning/StartLearning")
);

const HomePage: FC = () => {
  useEffect(() => {
    QuizStore.getAllQuestions();
  }, []);

  return (
    <ScaleFade
      in={true}
      style={{ position: "relative" }}
      transition={{ exit: { delay: 1 }, enter: { duration: 0.5 } }}
    >
      <Section>
        <MainContainer>
          <Welcome>
            <Suspense fallback={<Loader />}>
              <StartLearning>Start Learning</StartLearning>
            </Suspense>
          </Welcome>
        </MainContainer>
      </Section>
    </ScaleFade>
  );
};

export default HomePage;
