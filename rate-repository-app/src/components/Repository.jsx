import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import { View } from "react-native";
import Text from "./Text";
import { useParams } from "react-router-native";
import Button from "./Button";
import * as Linking from "expo-linking";

// View for a single repository view
const Repository = () => {
  const id = useParams().id;
  console.log(id);
  const { repository, loading } = useRepository(id);

  console.log(repository);

  if (loading) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <RepositoryItem repository={repository} />
      <Button onPress={async () => await Linking.openURL(repository.url)}>
        Open in GitHub
      </Button>
    </View>
  );
};

export default Repository;
