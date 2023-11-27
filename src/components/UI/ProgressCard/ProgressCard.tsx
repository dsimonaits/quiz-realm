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

interface IProgressCard {
  image?: string | undefined;
  icon?: React.ReactElement | undefined;
  cardName: string;
  amount: number;
  totalAmount?: number | null;
}

const ProgressCard: FC<IProgressCard> = ({
  image,
  icon,
  cardName,
  amount,
  totalAmount,
}) => {
  return (
    <VStack
      border="2px solid"
      borderColor="accent"
      minW={["250px"]}
      align="left"
      px="20px"
      py="10px"
      borderRadius="15px"
    >
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

      <Heading as="h3" fontSize={[15]}>
        {cardName}
      </Heading>
      <HStack justify="right" align="baseline">
        <Text fontSize={[30]} fontWeight="bold">
          {amount}
        </Text>
        {totalAmount ? <Text>/{totalAmount}</Text> : null}
      </HStack>
    </VStack>
  );
};

export default ProgressCard;
