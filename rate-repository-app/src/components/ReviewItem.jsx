import { StyleSheet } from "react-native";
import { View } from "react-native";
import Text from "./Text";
import theme from "../theme";

const RatingIcon = ({ rating }) => {
  const styles = StyleSheet.create({
    container: {
      width: 50,
      height: 50,
      borderRadius: "100%",
      borderStyle: "solid",
      borderWidth: 2,
      borderColor: theme.colors.primary,
      justifyContent: "center",
    },
    number: {
      textAlign: "center",
      fontSize: 15,
    },
  });
  return (
    <View style={styles.container}>
      <Text color="primary" fontWeight="bold" style={styles.number}>
        {rating}
      </Text>
    </View>
  );
};

const Name = ({ name }) => {
  return (
    <View>
      <Text fontSize="subheading" fontWeight="bold">
        {name}
      </Text>
    </View>
  );
};

const Date = ({ date }) => {
  return (
    <View>
      <Text color="textSecondary">{date.substring(0, 10)}</Text>
    </View>
  );
};

const Content = ({ text }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      flex: 1,
    },
  });
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
};

const ReviewInfo = ({ review }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      alignItems: "stretch",
      flex: 1,
      paddingLeft: 10,
      paddingRight: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Name name={review.user.username} />
      <Date date={review.createdAt} />
      <Content text={review.text} />
    </View>
  );
};

const ReviewItem = ({ review }) => {
  const itemStyles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "stretch",
      backgroundColor: "white",
      paddingTop: 10,
      paddingLeft: 10,
      paddingBottom: 10,
    },
  });

  return (
    <View style={itemStyles.container}>
      <RatingIcon rating={review.rating} />
      <ReviewInfo review={review} />
    </View>
  );
};

export default ReviewItem;
