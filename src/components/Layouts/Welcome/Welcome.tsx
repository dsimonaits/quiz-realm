import { Heading, Image, Text, Flex, Stack } from "@chakra-ui/react";
import { FC } from "react";
import HeroPng from "../../../images/hero.png";
import HeroPngX2 from "../../../images/hero(x2).png";
import CurvedLine from "../../../images/curvedLine.png";

interface IWelcome {
  children: React.ReactNode;
}

const Welcome: FC<IWelcome> = ({ children }) => {
  return (
    <Flex
      display="flex"
      flexDirection={["column", "column", "row"]}
      align="center"
      pl={["0", "0", "45"]}
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
        src="quiz-realm/hero.png"
        alt="people with question marks"
        srcSet={`${HeroPng} 1x, ${HeroPngX2} 2x`}
        flex="1"
        width="400px"
      />
      <Image
        position="absolute"
        bottom="0"
        left="40px"
        src={CurvedLine}
        alt="Curved line"
      />
    </Flex>
  );
};

export default Welcome;
