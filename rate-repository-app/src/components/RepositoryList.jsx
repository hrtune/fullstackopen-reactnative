import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import Text from "./Text";
// import useMe from "../hooks/useMe";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "#ecf0f1",
  },
});

// eslint-disable-next-line
const repositories = [
  {
    id: "jaredpalmer.formik",
    fullName: "jaredpalmer/formik",
    description: "Build forms in React, without the tears",
    language: "TypeScript",
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/4060187?v=4",
  },
  {
    id: "rails.rails",
    fullName: "rails/rails",
    description: "Ruby on Rails",
    language: "Ruby",
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: "https://avatars1.githubusercontent.com/u/4223?v=4",
  },
  {
    id: "django.django",
    fullName: "django/django",
    description: "The Web framework for perfectionists with deadlines.",
    language: "Python",
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/27804?v=4",
  },
  {
    id: "reduxjs.redux",
    fullName: "reduxjs/redux",
    description: "Predictable state container for JavaScript apps",
    language: "TypeScript",
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: "https://avatars3.githubusercontent.com/u/13142323?v=4",
  },
];

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  // const { me } = useMe();

  const repositoryAllNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const repositoryNodes = /* me
    ? repositoryAllNodes.filter((n) => n.userHasReviewed)
    : */ repositoryAllNodes;

  if (!repositoryNodes.length) {
    return (
      <View>
        <Text>No reviewed repositories...</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem {...item} />}
      />
    </View>
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();
  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
