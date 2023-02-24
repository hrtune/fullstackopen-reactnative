import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppTab";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    backgroundColor: "#24292e",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab link="/">Repositories</AppBarTab>
      <AppBarTab link="/signin">Sign in</AppBarTab>
    </View>
  );
};

export default AppBar;
