import React, { FC } from "react";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";
import { IoPerson as FirstName } from "react-icons/io5";
import { MdFamilyRestroom as Surname, MdEmail as Email } from "react-icons/md";
import {
  Heading,
  Image,
  VStack,
  Text,
  HStack,
  Flex,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  ListItem,
  List,
} from "@chakra-ui/react";
import { IUser } from "../../../store/UserStore";
import CustomButton from "../Button/Button";

interface IUserCard {
  image?: string;
  icon?: React.ReactElement;
  user: IUser;
  level: number;
  score: number;
  scoreToNextLevel?: number;
  onClick: () => void;
}

const UserCard: FC<IUserCard> = ({
  image,
  icon,
  user,
  level,
  score,
  scoreToNextLevel,
  onClick,
}) => {
  return (
    <VStack
      border="2px solid"
      borderColor="accent"
      minW={["320px", "400px", "400px"]}
      maxW={["400px"]}
      align="left"
      px="20px"
      py="10px"
      borderRadius="15px"
    >
      <Heading mb="10px" as="h3" fontSize={[20]}>
        User
      </Heading>
      <HStack>
        <Flex
          align="center"
          justify="center"
          border="1px solid"
          backgroundColor="accent"
          borderColor="accent"
          borderRadius="50%"
          width="50px"
          height="50px"
        >
          {image ? (
            <Image src={image} />
          ) : (
            <Box as="span" fontSize={[30]} color="white">
              {icon}
            </Box>
          )}
        </Flex>
        <Heading as="h3" fontSize={[20]}>
          {user.username}
        </Heading>
      </HStack>

      <HStack justify="space-between">
        <Text display="block" fontSize={[15, 20, 20]}>
          LvL:{" "}
          <Box as="span" fontSize={[25, 30, 30]} fontWeight="bold">
            {" "}
            {level}
          </Box>
        </Text>
        <HStack align="baseline">
          {" "}
          <Text fontSize={[15, 20, 20]}>Next level:</Text>
          <Text fontSize={[25, 30, 30]} fontWeight="bold">
            {score}{" "}
            <Box as="span" fontSize={[15, 20, 20]}>
              /{scoreToNextLevel}
            </Box>
          </Text>
        </HStack>
      </HStack>
      <Accordion allowMultiple>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <AccordionButton justifyContent="center">
                {isExpanded ? <FaAnglesUp /> : <FaAnglesDown />}
              </AccordionButton>
              <AccordionPanel pb={4}>
                <List display="flex" flexDirection="column" gap="10px">
                  <ListItem display="flex" alignItems="center" gap="10px">
                    <FirstName />
                    <Text>{user.first_name}</Text>
                  </ListItem>
                  <ListItem display="flex" alignItems="center" gap="10px">
                    <Surname />
                    <Text>{user.last_name}</Text>
                  </ListItem>
                  <ListItem display="flex" alignItems="center" gap="10px">
                    <Email />
                    <Text>{user.email}</Text>
                  </ListItem>
                  <ListItem display="flex" alignItems="center" gap="10px">
                    <CustomButton onClickHandler={onClick}>
                      Edit profile
                    </CustomButton>
                  </ListItem>
                </List>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </VStack>
  );
};

export default UserCard;
