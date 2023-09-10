import { Heading, Image, Text, Flex, Stack } from "@chakra-ui/react";
import { FC } from "react";

interface IWelcome {
  children: React.ReactNode;
}

const Welcome: FC<IWelcome> = ({ children }) => {
  return (
    <Flex
      display="flex"
      position="relative"
      flexDirection={["column", "column", "row"]}
      align="center"
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
        srcSet="hero.png 1x, hero(x2).png 2x"
        flex="1"
        width="400px"
      />
      {/* <Image
        position="absolute"
        bottom="0"
        left="0"
        src="curvedLine.png"
        alt="Curved line"
      /> */}
    </Flex>
  );
};

export default Welcome;
