/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from "react";
import { Form, Formik, Field, FieldProps } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

interface FormValues {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  password: string;
  confirm_password: string;
  age?: number;
}

const registrationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Must be at least 3 characters long"),
  first_name: Yup.string()
    .required("First name is required")
    .matches(/^[A-Za-z]+$/, "Must be only alphabetical characters")
    .min(3, "Must be at least 3 characters long"),
  last_name: Yup.string()
    .required("Last name is required")
    .matches(/^[A-Za-z]+$/, "Must be only alphabetical characters")
    .min(3, "Must be at least 3 characters long"),
  email: Yup.string()
    .required("Email is required")
    .email("Must be a valid email"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must contain at least 6 characters")
    .max(10, "Password can contain max 10 characters"),
  confirm_password: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
  age: Yup.number().optional().typeError("Must be a number"),
});

const RegistrationForm: FC = () => {
  return (
    <Box
      width={["280px", "400px", "400px"]}
      p="20px"
      border="2px solid"
      borderColor="accent"
    >
      <Formik
        validationSchema={registrationSchema}
        initialValues={{
          username: "",
          first_name: "",
          last_name: "",
          age: undefined,
          email: "",
          password: "",
          confirm_password: "",
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {(props) => (
          <Form>
            <Field name="username">
              {({ field, form }: FieldProps<string, FormValues>) => (
                <FormControl
                  _notLast={{ marginBottom: "10px" }}
                  isInvalid={!!(form.errors.username && form.touched.username)}
                >
                  <FormLabel>Username</FormLabel>
                  <Input
                    focusBorderColor="accent"
                    {...field}
                    placeholder="username"
                  />
                  <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="first_name">
              {({ field, form }: FieldProps<string, FormValues>) => (
                <FormControl
                  isInvalid={
                    !!(form.errors.first_name && form.touched.first_name)
                  }
                >
                  <FormLabel>First Name</FormLabel>
                  <Input
                    focusBorderColor="accent"
                    {...field}
                    placeholder="first name"
                  />
                  <FormErrorMessage>{form.errors.first_name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="last_name">
              {({ field, form }: FieldProps<string, FormValues>) => (
                <FormControl
                  isInvalid={
                    !!(form.errors.last_name && form.touched.last_name)
                  }
                >
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    focusBorderColor="accent"
                    {...field}
                    placeholder="last name"
                  />
                  <FormErrorMessage>{form.errors.last_name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="age">
              {({ field, form }: FieldProps<string, FormValues>) => (
                <FormControl
                  isInvalid={!!(form.errors.age && form.touched.age)}
                >
                  <FormLabel>Age</FormLabel>
                  <Input
                    focusBorderColor="accent"
                    {...field}
                    placeholder="age"
                  />
                  <FormErrorMessage>{form.errors.age}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, form }: FieldProps<string, FormValues>) => (
                <FormControl
                  isInvalid={!!(form.errors.email && form.touched.email)}
                >
                  <FormLabel>Email</FormLabel>
                  <Input
                    focusBorderColor="accent"
                    {...field}
                    placeholder="email"
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field, form }: FieldProps<string, FormValues>) => (
                <FormControl
                  isInvalid={!!(form.errors.password && form.touched.password)}
                >
                  <FormLabel>Password</FormLabel>
                  <Input
                    focusBorderColor="accent"
                    {...field}
                    placeholder="password"
                  />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="confirm_password">
              {({ field, form }: FieldProps<string, FormValues>) => (
                <FormControl
                  isInvalid={
                    !!(
                      form.errors.confirm_password &&
                      form.touched.confirm_password
                    )
                  }
                >
                  <FormLabel>Confirm Password</FormLabel>
                  <Input
                    focusBorderColor="accent"
                    {...field}
                    placeholder="confirm password"
                  />
                  <FormErrorMessage>
                    {form.errors.confirm_password}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              mx="auto"
              display="block"
              color="primary"
              bg="accent"
              _hover={{ color: "secondary" }}
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default RegistrationForm;
