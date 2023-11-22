import Section from "../components/Layouts/Section/Section";
import MainContainer from "../components/Layouts/Container/Container";
import {
  Button,
  HStack,
  Heading,
  Highlight,
  ScaleFade,
  Text,
} from "@chakra-ui/react";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <ScaleFade
      in={true}
      style={{ position: "relative" }}
      transition={{ exit: { delay: 1 }, enter: { duration: 0.5 } }}
    >
      <Section>
        <MainContainer>
          <Heading as="h1" size="xl">
            About Quiz app
          </Heading>
          <Text my="10px">
            <Highlight
              query="QuizRealm | JS and Beyond"
              styles={{
                px: "1",
                py: "1",
                color: "white",
                bg: "accent",
                rounded: "full",
              }}
            >
              Hi, I'm Deniss Siomnaits, the creator of QuizRealm | JS and
              Beyond.
            </Highlight>
          </Text>
          This app was born out of a passion for learning and the desire to make
          it accessible and enjoyable for everyone.
          <Text>
            QuizRealm is not a commercial app. It's a labor of love dedicated to
            the pursuit of knowledge. Whether you're a student, a professional,
            or simply someone curious about the world, this app is designed to
            help you on your path of continuous learning.
          </Text>
          <Heading as="h2" size="md" mt="10px">
            Mission
          </Heading>
          <Text mt="5px">
            Mission is simple: to empower individuals to expand their horizons
            through learning. Knowledge is the key to personal and professional
            growth, and I'm committed to providing a platform that facilitates
            this growth.
          </Text>
          <Heading as="h2" size="md" mt="10px">
            Technical Details
          </Heading>
          <Text mt="5px">
            QuizRealm is built using React, a powerful JavaScript library for
            building user interfaces. This modern and efficient technology
            allows us to deliver a seamless and responsive learning experience.
          </Text>
          <Text mt="5px">
            I choose Chakra UI to create a clean and visually appealing user
            interface. MobX helps manage the state of our app, ensuring a smooth
            and efficient user experience. Additionally, we make use of various
            custom components and utilities to enhance the learning process.
          </Text>
          <Heading as="h2" size="md" mt="10px">
            Get Started Today!
          </Heading>
          <Text mt="5px">
            I invite you to embark on your learning journey with me. Whether
            you're here to improve your skills, explore new topics, or simply
            enjoy the thrill of learning something new, I'm here to support you
            every step of the way.
          </Text>
          <Text mt="5px">
            Thank you for choosing QuizRealm as your companion in the pursuit of
            knowledge. I'm excited to have you on board, and I can't wait to see
            how your learning journey unfolds.
          </Text>
          <Heading as="h2" size="md" mt="10px">
            Get in Touch
          </Heading>
          <Text mt="5px">
            I'd love to hear from you! Whether you have ideas to improve
            QuizRealm, encounter any issues or simply want to get in touch, feel
            free to reach out to me on LinkedIn.
          </Text>
          <Text mt="5px">
            You can contact me via one of my profiles in social networks. I'm
            always open to new connections and ideas for enhancing your learning
            experience.
          </Text>
          <HStack mt="20px" justify="center">
            <form
              action="https://www.linkedin.com/in/deniss-simonaits"
              method="get"
              target="_blank"
            >
              <Button
                type="submit"
                colorScheme="linkedin"
                leftIcon={<FaLinkedin />}
              >
                LinkedIn
              </Button>
            </form>
            <form
              action="https://github.com/dsimonaits"
              method="get"
              target="_blank"
            >
              <Button
                type="submit"
                bg="black"
                color="white"
                leftIcon={<FaGithub />}
              >
                GitHub
              </Button>
            </form>
            <form
              action="https://www.facebook.com/denisssimonaits"
              method="get"
              target="_blank"
            >
              <Button
                type="submit"
                colorScheme="facebook"
                leftIcon={<FaFacebook />}
              >
                Facebook
              </Button>
            </form>
          </HStack>
        </MainContainer>
      </Section>
    </ScaleFade>
  );
};

export default About;
