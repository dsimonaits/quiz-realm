import { Box, Heading, Image, Text, Flex, Stack } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import QuizButton from "../UI/Button/Button";
import QuizModal from "../UI/Modal/Modal";

interface HeroProps {
  children: ReactNode;
}

const WelcomeHero: FC<HeroProps> = ({ children }) => {
  return (
    <Box
      as="section"
      maxWidth="1200px"
      m="auto"
      px={["20px", "20px", "60px"]}
      position="relative"
    >
      <Flex
        flexDirection={["column", "column", "row"]}
        pl={["0", "0", "45"]}
        pt={["10", "10", "0"]}
      >
        <Stack
          gap="20px"
          flex="1"
          alignItems={["center", "center", "flex-start"]}
          justifyContent="center"
        >
          <Heading as="h3" size="xl">
            Question <br /> by Question, <br /> Mastery Awaits{" "}
          </Heading>
          <Text>Achieve Your Goals with Us</Text>;{children}
        </Stack>
        <Image
          src="hero.png"
          alt="people with question marks"
          srcSet="hero.png 1x, hero(x2).png 2x,  hero(x4).png 4x"
          flex="1"
        />
        <Image
          position="absolute"
          bottom="0"
          left="0"
          src="curvedLine.png"
          alt="Curved line"
        />
      </Flex>
    </Box>
  );
};

export default WelcomeHero;
