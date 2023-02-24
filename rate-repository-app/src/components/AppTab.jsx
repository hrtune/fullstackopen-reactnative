import { StyleSheet, View, Pressable, Text } from "react-native";
const styles = StyleSheet.create({
  item: {},
  text: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});
const AppBarTab = ({ children }) => {
  return (
    <View style={styles.item}>
      <Pressable onPress={() => console.log("pressed:", children)}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default AppBarTab;
