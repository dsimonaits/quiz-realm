import React, { useState } from "react";
import Section from "../components/Layouts/Section/Section";
import LoginForm from "../components/form/LoginForm/LoginForm";
import {
  Box,
  Container,
  HStack,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import RegistrationForm from "../components/form/RegForm/RegForm";
import welcomeHat from "../images/Hands Graduate.svg";

const AuthPage = () => {
  const [formType, setFormType] = useState<"Login" | "Register">("Login");

  const toggleFormType = () => {
    setFormType(formType === "Login" ? "Register" : "Login");
  };

  return (
    <Section>
      <Container
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
        alignItems="center"
        mx="auto"
      >
        <HStack position="relative" mb={["20px", "20px", "20px"]}>
          <Heading as="h1" fontSize={[40, 40, 40]}>
            Quiz
            <Box as="span" color="accent">
              Realm
            </Box>
          </Heading>
          <Box
            position="absolute"
            top={["-10px", "-10px", "-10px"]}
            left={["-20px", "-20px", "-20px"]}
          >
            <Image src={welcomeHat} height="40px" />
          </Box>
        </HStack>

        <>
          {formType === "Login" ? <LoginForm /> : <RegistrationForm />}
          <Text mt={4}>
            {formType === "Login"
              ? "Need to register? "
              : "Already have an account? "}
            <Link color="accent" onClick={toggleFormType}>
              {formType === "Login" ? "Register here" : "Login here"}
            </Link>
          </Text>
        </>
      </Container>
    </Section>
  );
};

export default AuthPage;
