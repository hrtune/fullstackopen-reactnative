import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import { View, FlatList, StyleSheet } from "react-native";
import Text from "./Text";
import { useParams } from "react-router-native";
import Button from "./Button";
import * as Linking from "expo-linking";
import ReviewItem from "./ReviewItem";
import { separatorStyle } from "../style";

// View for a single repository view
const RepositoryInfo = ({ repository }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      paddingBottom: 10,
      marginBottom: 10,
    },
  });
  return (
    <View style={styles.container}>
      <RepositoryItem repository={repository} />
      <Button onPress={async () => await Linking.openURL(repository.url)}>
        Open in GitHub
      </Button>
    </View>
  );
};

const Repository = () => {
  const id = useParams().id;
  console.log(id);
  const { repository, loading, fetchMore } = useRepository(id, {
    reviewsFirst: 2,
  });

  if (loading) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  }

  console.log(repository);

  const reviews = repository.reviews.edges.map((e) => e.node);

  console.log(reviews);

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.1}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={() => <View style={separatorStyle.separator} />}
    />
  );
};

export default Repository;
