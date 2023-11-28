import Section from "../components/Layouts/Section/Section";
import MainContainer from "../components/Layouts/Container/Container";
import {
  Box,
  HStack,
  Heading,
  List,
  ListItem,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import UserStore from "../store/UserStore";
import { IProgress } from "../store/UserStore";
import ProgressCard from "../components/UI/ProgressCard/ProgressCard";
import {
  FaCheck,
  FaRegFaceGrinBeam,
  FaRegFaceFrownOpen,
} from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import UserCard from "../components/UI/UserCard/UserCard";
import StatisticCircleBar from "../components/UI/StatisticCircleBar/StatisticCircleBar";
import ScaleFadeComponent from "../components/UI/ScaleFade/ScaleFade";
import QuizModal from "../components/UI/Modal/Modal";
import EditUserForm from "../components/form/EditUserForm/EditUserForm";
import { observer } from "mobx-react-lite";

const DashboardPage = observer(() => {
  const userProgress: IProgress = UserStore.userProgress;
  const User = UserStore.user;

  const editProfileModalDisclosure = useDisclosure();

  const editUserHandle = () => {
    editProfileModalDisclosure.onOpen();
  };

  //

  const GoodFaultRatio = 80;

  const userProgressCards = [
    {
      icon: <FaCheck />,
      cardName: "Quizzes played",
      amount: userProgress.quizzes_played,
      totalAmount: undefined,
    },
    {
      icon: <FaRegFaceGrinBeam />,
      cardName: "Total correct answers",
      amount: userProgress.total_correct_answers,
      totalAmount: userProgress.questions_answered,
    },
    {
      icon: <FaRegFaceFrownOpen />,
      cardName: "Total incorrect answers",
      amount: userProgress.total_incorrect_answers,
      totalAmount: userProgress.questions_answered,
    },
  ];

  return (
    <ScaleFadeComponent>
      <Section>
        <MainContainer>
          <HStack flexWrap="wrap" gap={["40px"]} justify="space-around">
            <Box>
              <UserCard
                icon={<FaUserGraduate />}
                user={User}
                level={userProgress.current_level}
                score={userProgress.total_correct_answers}
                scoreToNextLevel={userProgress.questions_to_next_level}
                onClick={editUserHandle}
              />
            </Box>
            <Box>
              <StatisticCircleBar ratio={GoodFaultRatio} />
            </Box>
          </HStack>
          <VStack mt={["40px"]}>
            <Heading mb="10px" as="h3" fontSize={[20]}>
              Progress
            </Heading>
            <List
              display="flex"
              alignItems={["center"]}
              justifyContent="center"
              gap="30px"
              flexDirection={["column", "row", "row"]}
              flexWrap="wrap"
            >
              {userProgressCards.map((card) => {
                return (
                  <ListItem key={card.cardName}>
                    <ProgressCard
                      icon={card.icon}
                      cardName={card.cardName}
                      amount={card.amount}
                      totalAmount={card.totalAmount}
                    />
                  </ListItem>
                );
              })}
            </List>
          </VStack>
        </MainContainer>
      </Section>
      <QuizModal
        styles={{ display: "flex", justifyContent: "center" }}
        disclosure={editProfileModalDisclosure}
        modalTitle="Edit profile"
      >
        <EditUserForm />
      </QuizModal>
    </ScaleFadeComponent>
  );
});

export default DashboardPage;
