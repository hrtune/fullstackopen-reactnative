import useMe from "../hooks/useMe";
import { FlatList, View, StyleSheet, Alert } from "react-native";
import ReviewItem from "./ReviewItem";
import { separatorStyle } from "../style";
import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";
import Button from "./Button";
import * as Linking from "expo-linking";
import { useNavigate } from "react-router-native";
import Text from "./Text";

const ButtonField = ({ repoUrl, reviewId }) => {
  const navigate = useNavigate();
  const [mutate] = useMutation(DELETE_REVIEW);
  const deleteReview = async () => {
    try {
      await mutate({
        variables: {
          deleteReviewId: reviewId,
        },
      });
      navigate("/");
      navigate("/my_reviews");
    } catch (error) {
      console.log(error);
    }
  };

  const deletionAlert = () =>
    Alert.alert("Confirm deletion", "Are you sure to delete?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: deleteReview },
    ]);

  const openRepoLink = async () => {
    await Linking.openURL(repoUrl);
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-around",
      paddingBottom: 10,
    },
    redButton: {
      backgroundColor: "red",
      flexGrow: 1,
    },
  });
  return (
    <View style={styles.container}>
      <Button onPress={openRepoLink} style={{ flexGrow: 1 }}>
        View repository
      </Button>
      <Button onPress={deletionAlert} style={styles.redButton}>
        Delete review
      </Button>
    </View>
  );
};

const MyReviews = () => {
  const { me } = useMe(true);
  console.log(me);
  const reviews = me?.reviews?.edges?.map((e) => {
    return {
      ...e.node,
      user: {
        username: `${e.node.repository.ownerName}/${e.node.repository.name}`,
      },
    };
  });

  if (!reviews.length) {
    return <Text>No reviews</Text>;
  }
  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => (
        <View style={{ backgroundColor: "white" }}>
          <ReviewItem review={item} />
          <ButtonField repoUrl={item.repository.url} reviewId={item.id} />
        </View>
      )}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={() => <View style={separatorStyle.separator} />}
    />
  );
};

export default MyReviews;
