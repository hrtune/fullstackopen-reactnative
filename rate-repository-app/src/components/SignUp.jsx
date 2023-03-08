import FormikTextInput from "./FormikTextInput";
import { View, StyleSheet } from "react-native";
import Button from "./Button";
import * as yup from "yup";
import { Formik } from "formik";
import useSignUp from "../hooks/useSignUp";
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";

const SignUpView = ({ onSubmit }) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: "stretch",
    },
  });
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <FormikTextInput
        name="passwordConfirmation"
        placeholder="Password confirmation"
        secureTextEntry
      />
      <Button onPress={onSubmit}>Sign up</Button>
    </View>
  );
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required").min(1).max(30),
  password: yup.string().required("Password is required").min(5).max(50),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password doesn't match")
    .required("Password confirm is required"),
});

export const SignUpForm = ({ onSubmit }) => {
  const initialValues = {
    username: "",
    password: "",
    passwordConfirmation: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpView onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    try {
      const { data } = await signUp(values);
      console.log(data);

      await signIn(values);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return <SignUpForm onSubmit={onSubmit} />;
};

export default SignUp;
