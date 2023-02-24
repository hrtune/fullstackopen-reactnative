import { StyleSheet, View, Pressable, Text } from "react-native";
import { Link } from "react-router-native";
const styles = StyleSheet.create({
  item: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});
const AppBarTab = ({ children, link }) => {
  return (
    <View style={styles.item}>
      <Pressable onPress={() => console.log("pressed:", children)}>
        <Link to={link}>
          <Text style={styles.text}>{children}</Text>
        </Link>
      </Pressable>
    </View>
  );
};

export default AppBarTab;
