import Section from "../components/Layouts/Section/Section";
import MainContainer from "../components/Layouts/Container/Container";
import { Heading, ScaleFade } from "@chakra-ui/react";

const DashboardPage = () => {
  return (
    <ScaleFade
      in={true}
      style={{ position: "relative" }}
      transition={{ exit: { delay: 1 }, enter: { duration: 0.5 } }}
    >
      <Section>
        <MainContainer>
          <Heading as="h1" size="xl">
            Dashboard coming soon...
          </Heading>
        </MainContainer>
      </Section>
    </ScaleFade>
  );
};

export default DashboardPage;
