import { FC } from "react";
import Welcome from "../components/Layouts/Welcome/Welcome";
import StartLearning from "../components/form/StartLearning/StartLearning";
import Section from "../components/Layouts/Section/Section";

const HomePage: FC = () => {
  return (
    <Section>
      <Welcome>
        <StartLearning />
      </Welcome>
    </Section>
  );
};

export default HomePage;
