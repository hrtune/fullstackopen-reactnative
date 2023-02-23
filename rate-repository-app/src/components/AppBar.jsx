import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import AppTab from "./AppTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    backgroundColor: "#24292e",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppTab>Repositories</AppTab>
    </View>
  );
};

export default AppBar;