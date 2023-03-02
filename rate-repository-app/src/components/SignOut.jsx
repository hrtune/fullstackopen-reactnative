import { View, Pressable, StyleSheet } from "react-native";
import { useAuthStorage } from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";
import Text from "./Text";
import theme from "../theme";
const SignOut = () => {
  const styles = StyleSheet.create({
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

  const apolloClient = useApolloClient();

  const authStorage = useAuthStorage();

  const navigate = useNavigate();

  const onPress = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate("/");
  };

  return (
    <View style={styles.button}>
      <Pressable onPress={onPress}>
        <Text style={styles.buttonText}>Sign out</Text>
      </Pressable>
    </View>
  );
};

export default SignOut;
