import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { inputStyle } from "../style";
import TextInput from "./TextInput";
import Text from "./Text";
import { Component } from "react";
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

export class RepositoryListContainer extends Component {
  renderHeader = () => {
    const RepositoryListHeader = this.props.RepositoryListHeader;
    if (!this.hasRepositories()) {
      return (
        <View>
          <RepositoryListHeader />
          <Text> No repositories...</Text>
        </View>
      );
    }
    return <RepositoryListHeader />;
  };

  getRepositories() {
    const repositories = this.props.repositories;
    return repositories ? repositories.edges.map((e) => e.node) : [];
  }

  hasRepositories() {
    return this.getRepositories().length !== 0;
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.getRepositories()}
          ItemSeparatorComponent={ItemSeparator}
          ListHeaderComponent={this.renderHeader}
          onEndReached={this.props.onEndReach}
          onEndReachedThreshold={0.1}
          renderItem={({ item }) => <RepositoryItem repository={item} />}
        />
      </View>
    );
  }
}

/*
export const RepositoryListContainerFunction = ({
  repositories,
  ListHeader,
}) => {
  // const { me } = useMe();

  const repositoryAllNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const repositoryNodes =  me
    ? repositoryAllNodes.filter((n) => n.userHasReviewed)
    :  repositoryAllNodes;

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
        ListHeaderComponent={ListHeader}
        renderItem={({ item }) => <RepositoryItem repository={item} />}
        onEndReached={onEndReach}
      />
    </View>
  );
}; */

const ListHeader = ({ useSorting, useKeyword }) => {
  const SearchBox = () => {
    const [keyword, setKeyword] = useKeyword;
    const [text, setText] = useState(keyword);
    return (
      <View>
        <TextInput
          onChangeText={setText}
          onEndEditing={() => setKeyword(text)}
          placeholder="Type filter here..."
          value={text}
          style={inputStyle.input}
        />
      </View>
    );
  };
  const SortPicker = () => {
    const [sorting, setSorting] = useSorting;
    return (
      <View>
        <Picker
          selectedValue={sorting}
          onValueChange={(itemValue) => {
            setSorting(itemValue);
            console.log(itemValue, "selected");
          }}
        >
          <Picker.Item label="Latest repositories" value="latest" />
          <Picker.Item
            label="Highest rated repositories"
            value="highestRated"
          />
          <Picker.Item label="Lowest rated repositories" value="lowestRated" />
        </Picker>
      </View>
    );
  };
  return (
    <View style={{ alignItems: "stretch" }}>
      <SearchBox />
      <SortPicker />
    </View>
  );
};

const RepositoryList = () => {
  const { useKeyword, useSorting, repositories, fetchMore } = useRepositories({
    first: 2,
  });

  const Header = () => (
    <ListHeader useKeyword={useKeyword} useSorting={useSorting} />
  );

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      RepositoryListHeader={Header}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
