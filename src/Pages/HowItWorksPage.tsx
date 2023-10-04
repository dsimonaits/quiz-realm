import Section from "../components/Layouts/Section/Section";
import MainContainer from "../components/Layouts/Container/Container";
import { HStack, Heading, ScaleFade, Text } from "@chakra-ui/react";
import CustomButton from "../components/UI/Button/Button";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();
  return (
    <ScaleFade
      in={true}
      style={{ position: "relative" }}
      transition={{ exit: { delay: 1 }, enter: { duration: 0.5 } }}
    >
      <Section>
        <MainContainer>
          <Heading as="h1" size="xl">
            Your Learning Journey
          </Heading>

          <Heading as="h3" size="md" mt="10px">
            Step 1: Get Started
          </Heading>
          <Text mt="5px">
            When you first launch the app, you'll see a "Start Learning" button
            at Quiz page. Clicking on it will start your learning journey.
          </Text>

          <Heading as="h3" size="md" mt="10px">
            Step 2: Choose Your Category
          </Heading>
          <Text mt="5px">
            After clicking "Start Learning" you'll be prompted to choose a
            category. This is the main area of learning you're interested in.
          </Text>

          <Heading as="h3" size="md" mt="10px">
            Step 3: Select Your Topics
          </Heading>
          <Text mt="5px">
            Once you've chosen a category, you'll need to select specific topics
            within that category. You can choose one or more topics that you'd
            like to learn about.
          </Text>

          <Heading as="h3" size="md" mt="10px">
            Step 4: Click "Next"
          </Heading>
          <Text mt="5px">
            With your category and topics selected, click the "Next" button. If
            you forget to select a category or topic, don't worry the app will
            notify you to choose one.
          </Text>

          <Heading as="h3" size="md" mt="10px">
            Step 5: Begin Learning
          </Heading>
          <Text mt="5px">
            Now, you'll start your learning journey. The app will present you
            with quizzes related to the category and topics you've chosen. Your
            task is to answer the questions as accurately as possible.
          </Text>

          <Heading as="h3" size="md" mt="10px">
            Step 6: Answering Questions
          </Heading>
          <Text mt="5px">
            For each quiz question, you'll see multiple answer options. Choose
            the correct answer to move on to the next question.
          </Text>

          <Heading as="h3" size="md" mt="10px">
            Step 7: Complete the Quiz
          </Heading>
          <Text mt="5px">
            After answering all the questions, you'll complete the quiz. The app
            will show you how well you did, including the number of correct and
            incorrect answers.
          </Text>

          <Heading as="h3" size="md" mt="10px">
            Step 8: Complete and Restart
          </Heading>
          <Text mt="5px">
            Once you've finished your learning session, you can click the
            "Complete" button. This will end your learning session and take you
            back to the start, where you can choose a new category and topics or
            continue your learning journey.
          </Text>

          <Heading as="h3" size="md" mt="10px">
            Step 10: Customize Your Learning
          </Heading>
          <Text mt="5px">
            Feel free to explore different categories and topics to tailor your
            learning experience.
          </Text>
          <HStack mt="10px" justify="center">
            <CustomButton onClickHandler={() => navigate("/")}>
              Lets get started
            </CustomButton>
          </HStack>
        </MainContainer>
      </Section>
    </ScaleFade>
  );
};

export default HowItWorks;
HowItWorks;
