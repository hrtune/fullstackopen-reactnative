import { StyleSheet } from "react-native";
import theme from "./theme";

export const buttonStyle = StyleSheet.create({
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

export const separatorStyle = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "#ecf0f1",
  },
});

export const inputStyle = StyleSheet.create({
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
});
