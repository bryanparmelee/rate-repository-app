import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    width: "full",
    height: 30,
    borderColor: "gray",
    borderWidth: 1,
    padding: 4,
  },
  errorText: {
    marginTop: 1,
    height: 30,
    borderColor: "#d73a4a",
    borderWidth: 1,
    padding: 4,
  },
});

const TextInput = ({ error, ...props }) => {
  const textInputStyle = error ? styles.errorText : styles.input;

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
