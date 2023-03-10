import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppTab";
import useMe from "../hooks/useMe";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    backgroundColor: "#24292e",
  },
});

const AppBar = () => {
  const { me, loading } = useMe();
  if (loading) {
    return (
      <View style={styles.container}>
        <ScrollView horizontal>
          <AppBarTab link="/">Repositories</AppBarTab>
        </ScrollView>
      </View>
    );
  }
  console.log(me);
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab link="/">Repositories</AppBarTab>
        {me ? (
          <>
            <AppBarTab link="/post_review">Create a review</AppBarTab>
            <AppBarTab link="/my_reviews">My reviews</AppBarTab>
            <AppBarTab link="/signout">Sign out</AppBarTab>
          </>
        ) : (
          <>
            <AppBarTab link="/signin">Sign in</AppBarTab>
            <AppBarTab link="/signup">Sign up</AppBarTab>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
