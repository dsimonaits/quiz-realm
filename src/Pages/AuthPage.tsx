import { useState } from "react";
import Section from "../components/Layouts/Section/Section";
import LoginForm from "../components/form/LoginForm/LoginForm";
import { Box, HStack, Heading, Image, VStack, Text } from "@chakra-ui/react";
import RegistrationForm from "../components/form/RegForm/RegForm";
import GraduateSmall from "../images/HandsGraduate.svg";
import GraduateBig from "../images/HandsGraduateBig.png";
import MainContainer from "../components/Layouts/Container/Container";
import CustomButton from "../components/UI/Button/Button";

const AuthPage = () => {
  const [formType, setFormType] = useState<"Login" | "Register">("Login");

  const toggleFormType = () => {
    setFormType(formType === "Login" ? "Register" : "Login");
  };

  return (
    <Section style={{ py: "60px" }}>
      <MainContainer
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "60vh",
        }}
      >
        <HStack display="flex" width="inherit">
          <VStack flex="1">
            <HStack
              position="relative"
              justify="center"
              width={["250px", "250px", "250px"]}
              mb={["20px", "20px", "20px"]}
            >
              <Heading as="h1" fontSize={[40, 40, 40]}>
                Quiz
                <Box as="span" color="accent">
                  Realm
                </Box>
              </Heading>
              <Box
                position="absolute"
                top={["-12px", "-12px", "-12px"]}
                left={["-5px", "-5px", "-5px"]}
              >
                <Image src={GraduateSmall} height="40px" />
              </Box>
            </HStack>
            <Heading as="h2" fontSize={[20, 20, 20]}>
              {formType === "Login" ? "Welcome back" : "Welcome new user"}
            </Heading>
            <Text fontSize={[15, 15, 15]}>Please {formType}</Text>
            {formType === "Login" ? (
              <LoginForm>
                <HStack mt="20px" gap="20px" justify="center">
                  <CustomButton
                    style={{
                      boxShadow: "0px 5px 0px 0px",
                      width: "110px",
                    }}
                    attributes={{ type: "submit" }}
                  >
                    Login
                  </CustomButton>
                  <CustomButton
                    style={{ as: "div", width: "110px", color: "background" }}
                    onClickHandler={toggleFormType}
                  >
                    Register
                  </CustomButton>
                </HStack>
              </LoginForm>
            ) : (
              <RegistrationForm>
                <HStack gap="20px" mt="20px" justify="center">
                  <CustomButton
                    style={{ as: "div", width: "110px", color: "background" }}
                    onClickHandler={toggleFormType}
                  >
                    Login
                  </CustomButton>
                  <CustomButton
                    style={{
                      boxShadow: "0px 5px 0px 0px",
                      width: "110px",
                    }}
                    attributes={{ type: "submit" }}
                  >
                    Register
                  </CustomButton>
                </HStack>
              </RegistrationForm>
            )}
          </VStack>
          <Box
            display={["none", "none", "flex"]}
            justifyContent="center"
            alignItems="center"
            px="20px"
            flex="1"
            backgroundColor="background"
            h="100vh"
          >
            <Image src={GraduateBig} width={["300px", "300px", "300px"]} />
          </Box>
        </HStack>
      </MainContainer>
    </Section>
  );
};

export default AuthPage;
