import useMe from "../hooks/useMe";
import { FlatList, View } from "react-native";
import ReviewItem from "./ReviewItem";
import { separatorStyle } from "../style";

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
  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={() => <View style={separatorStyle.separator} />}
    />
  );
};

export default MyReviews;
