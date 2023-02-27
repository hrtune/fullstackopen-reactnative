import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const red = "#d73a4a";

const styles = StyleSheet.create({
  error: {
    borderColor: red,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = error ? [style, styles.error] : style;

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
