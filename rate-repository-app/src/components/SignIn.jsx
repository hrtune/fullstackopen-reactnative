import Text from "./Text";
import { View, Pressable, StyleSheet } from "react-native";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";
import { Formik } from "formik";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";

const SignInView = ({ onSubmit }) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: "stretch",
    },
    input: {
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "grey",
      borderRadius: 3,
      paddingTop: 10,
      paddingBottom: 10,
      paddingStart: 5,
      paddingEnd: 5,
      marginTop: 10,
      marginStart: 10,
      marginEnd: 10,
    },
    button: {
      marginTop: 10,
      marginStart: 10,
      marginEnd: 10,
      backgroundColor: theme.colors.primary,
      borderRadius: 3,
    },
    buttonText: {
      paddingTop: 10,
      paddingBottom: 10,
      fontWeight: "bold",
      color: "white",
      textAlign: "center",
    },
  });
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        placeholder="Username"
        style={styles.input}
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const SignInForm = ({ onSubmit }) => {
  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInView onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log({ username, password });
    try {
      const { data } = await signIn({ username, password });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
