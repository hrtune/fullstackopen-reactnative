import { StyleSheet, View } from "react-native";
import { Routes, Route, Navigate } from "react-router-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import Repository from "./Repository";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#ecf0f1",
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/signout" element={<SignOut />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/repository/:id" element={<Repository />} exact />
      </Routes>
    </View>
  );
};

export default Main;
