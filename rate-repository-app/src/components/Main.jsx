import { StyleSheet, View } from "react-native";
import { Routes, Route, Navigate } from "react-router-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import Repository from "./Repository";
import PostReview from "./PostReview";
import SignUp from "./SignUp";
import MyReviews from "./MyReviews";

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
        <Route path="/post_review" element={<PostReview />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/my_reviews" element={<MyReviews />} exact />
      </Routes>
    </View>
  );
};

export default Main;
