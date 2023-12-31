/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from "react";
import UserStore from "../../../store/UserStore";
import { Form, Formik, Field, FieldProps } from "formik";
import * as Yup from "yup";
import { Box, FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { InputStyles, FormControlStyles } from "./styles";
import ScaleFadeComponent from "../../UI/ScaleFade/ScaleFade";

interface FormValues {
  email: string;
  password: string;
}

interface ILogin {
  children: React.ReactNode;
}

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const LoginForm: FC<ILogin> = ({ children }) => {
  return (
    <ScaleFadeComponent>
      <Box width={["280px", "400px", "400px"]} p="20px">
        <Formik
          validationSchema={schema}
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);

            UserStore.login(values);
          }}
        >
          {() => (
            <Form>
              <Field name="email">
                {({ field, form }: FieldProps<string, FormValues>) => (
                  <FormControl
                    isInvalid={!!(form.errors.email && form.touched.email)}
                    {...FormControlStyles}
                  >
                    <Input
                      {...InputStyles}
                      {...field}
                      placeholder="email"
                      autoComplete="email"
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="password">
                {({ field, form }: FieldProps<string, FormValues>) => (
                  <FormControl
                    isInvalid={
                      !!(form.errors?.password && form.touched.password)
                    }
                    {...FormControlStyles}
                  >
                    <Input
                      type="password"
                      {...InputStyles}
                      {...field}
                      placeholder="password"
                      autoComplete="password"
                    />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              {children}
            </Form>
          )}
        </Formik>
      </Box>
    </ScaleFadeComponent>
  );
};

export default LoginForm;
