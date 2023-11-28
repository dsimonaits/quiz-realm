/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";
import { Form, Formik, Field, FieldProps } from "formik";
import * as Yup from "yup";
import { Box, FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import ScaleFadeComponent from "../../UI/ScaleFade/ScaleFade";
import { InputStyles, FormControlStyles } from "./styles";
import UserStore from "../../../store/UserStore";
import CustomButton from "../../UI/Button/Button";

interface FormValues {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
}

const updateUserSchema = Yup.object().shape({
  username: Yup.string().min(3, "Must be at least 3 characters long"),
  first_name: Yup.string()
    .matches(/^[A-Za-z]+$/, "Must be only alphabetical characters")
    .min(3, "Must be at least 3 characters long"),
  last_name: Yup.string()
    .matches(/^[A-Za-z]+$/, "Must be only alphabetical characters")
    .min(3, "Must be at least 3 characters long"),
  email: Yup.string().email("Must be a valid email"),
  password: Yup.string()
    .min(6, "Password must contain at least 6 characters")
    .max(10, "Password can contain max 10 characters"),
  confirm_password: Yup.string()
    .min(6, "Password must contain at least 6 characters")
    .max(10, "Password can contain max 10 characters")
    .test("password not empty", "error message", (_, validationContext) => {
      const {
        createError,
        parent: { password },
      } = validationContext;

      if (password !== undefined) {
        return createError({
          message: "Password must match",
        });
      }
      return true;
    }),
});

const EditUserForm: FC = () => {
  return (
    <ScaleFadeComponent>
      <Box width={["280px", "400px", "400px"]} p="20px">
        <Formik
          validationSchema={updateUserSchema}
          initialValues={{
            username: "",
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirm_password: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);

            UserStore.updateUserProfile(values);
          }}
        >
          {() => (
            <Form>
              <Field name="username">
                {({ field, form }: FieldProps<string, FormValues>) => (
                  <FormControl
                    {...FormControlStyles}
                    isInvalid={
                      !!(form.errors.username && form.touched.username)
                    }
                  >
                    <Input
                      {...InputStyles}
                      {...field}
                      placeholder="username"
                      autoComplete="username"
                    />
                    <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="first_name">
                {({ field, form }: FieldProps<string, FormValues>) => (
                  <FormControl
                    {...FormControlStyles}
                    isInvalid={
                      !!(form.errors.first_name && form.touched.first_name)
                    }
                  >
                    <Input
                      {...InputStyles}
                      {...field}
                      placeholder="first name"
                      autoComplete="given-name"
                    />
                    <FormErrorMessage>
                      {form.errors.first_name}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="last_name">
                {({ field, form }: FieldProps<string, FormValues>) => (
                  <FormControl
                    {...FormControlStyles}
                    isInvalid={
                      !!(form.errors.last_name && form.touched.last_name)
                    }
                  >
                    <Input
                      {...InputStyles}
                      {...field}
                      placeholder="last name"
                      autoComplete="family-name"
                    />
                    <FormErrorMessage>{form.errors.last_name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="email">
                {({ field, form }: FieldProps<string, FormValues>) => (
                  <FormControl
                    {...FormControlStyles}
                    isInvalid={!!(form.errors.email && form.touched.email)}
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
                    {...FormControlStyles}
                    isInvalid={
                      !!(form.errors.password && form.touched.password)
                    }
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
              <Field name="confirm_password">
                {({ field, form }: FieldProps<string, FormValues>) => (
                  <FormControl
                    {...FormControlStyles}
                    isInvalid={
                      !!(
                        form.errors.confirm_password &&
                        form.touched.confirm_password
                      )
                    }
                  >
                    <Input
                      type="password"
                      {...InputStyles}
                      {...field}
                      placeholder="confirm password"
                      autoComplete="password"
                    />
                    <FormErrorMessage>
                      {form.errors.confirm_password}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <CustomButton
                style={{ mx: "auto", mt: "20px" }}
                attributes={{ type: "submit" }}
              >
                Submit changes
              </CustomButton>
            </Form>
          )}
        </Formik>
      </Box>
    </ScaleFadeComponent>
  );
};

export default EditUserForm;
