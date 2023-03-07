import { Pressable } from "react-native";
import Text from "./Text";
import { buttonStyle as styles } from "../style";

const Button = ({ onPress, children }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

export default Button;
