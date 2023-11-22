import React, { useState } from "react";
import Section from "../components/Layouts/Section/Section";
import LoginForm from "../components/form/LoginForm/LoginForm";
import { Container, Link, Text } from "@chakra-ui/react";
import RegistrationForm from "../components/form/RegForm/RegForm";

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
