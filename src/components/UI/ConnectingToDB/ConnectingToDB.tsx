import { Box, Divider, Heading, Progress, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MainContainer from "../../Layouts/Container/Container";

const ConnectingToDB = () => {
  const [progressPercent, setProgressPercent] = useState(0);
  const [funnySentenceQueue, setFunnySentenceQueue] = useState(0);

  const funnySentences = [
    {
      text: "Assembling the quiz questions like puzzle pieces...",
    },
    {
      text: "Polishing the code gems for a flawless quiz experience...",
    },
    {
      text: "Our servers are training in mental gymnastics for the quiz challenges...",
    },
    {
      text: "The question fairies are sprinkling wisdom over the quizzes...",
    },
    {
      text: "Conducting a symphony of algorithms to ensure your quiz harmony...",
    },
    {
      text: "Finalizing, almost done...",
    },
  ];

  useEffect(() => {
    const progressID = setInterval(() => {
      setProgressPercent((prev) => prev + 0.03);
      if (progressPercent > 10 && progressPercent <= 20)
        setFunnySentenceQueue(1);
      if (progressPercent > 20 && progressPercent <= 40)
        setFunnySentenceQueue(2);
      if (progressPercent > 40 && progressPercent <= 60)
        setFunnySentenceQueue(3);
      if (progressPercent > 60 && progressPercent <= 80)
        setFunnySentenceQueue(4);
      if (progressPercent > 100) setFunnySentenceQueue(5);
    }, 10);

    if (progressPercent == 100) {
      clearInterval(progressID);
    }

    return () => {
      clearInterval(progressID);
    };
  }, [progressPercent]);

  return (
    <Box
      as="section"
      position="absolute"
      width="100vw"
      height="80vh"
      background="secondary"
      top="-50%"
      left="-50%"
      transform="translate(50%, 50%)"
    >
      <MainContainer style={{ width: ["200px", "400px", "600px"] }}>
        <Heading as="h1" fontSize={[15, 20, 25]} textAlign="center">
          Connecting to server...
        </Heading>
        <Divider my="10px" />
        <Progress colorScheme="Quiz" size="sm" value={progressPercent} />
        <Text textAlign="center" mt="20px" fontSize={[10, 15, 20]}>
          {funnySentences[funnySentenceQueue].text}
        </Text>
      </MainContainer>
    </Box>
  );
};

export default ConnectingToDB;
