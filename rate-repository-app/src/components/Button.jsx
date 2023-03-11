import { Pressable } from "react-native";
import Text from "./Text";
import { buttonStyle } from "../style";

const Button = ({ onPress, children, style }) => {
  const styles = [buttonStyle.button, style];
  return (
    <Pressable onPress={onPress} style={styles}>
      <Text style={buttonStyle.buttonText}>{children}</Text>
    </Pressable>
  );
};

export default Button;
