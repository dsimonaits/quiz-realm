import {
  Heading,
  Image,
  VStack,
  Text,
  HStack,
  Flex,
  Box,
} from "@chakra-ui/react";
import React, { FC } from "react";

interface IUserCard {
  image?: string;
  icon?: React.ReactElement;
  userName: string;
  level: number;
  score: number;
  scoreToNextLevel?: number;
}

const UserCard: FC<IUserCard> = ({
  image,
  icon,
  userName,
  level,
  score,
  scoreToNextLevel,
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
          {userName}
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
    </VStack>
  );
};

export default UserCard;
