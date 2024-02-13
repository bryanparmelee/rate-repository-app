import { Pressable } from "react-native";
import Text from "./Text";

const AppBarTab = ({ text, styles }) => {
  return (
    <Pressable style={styles}>
      <Text color={"white"} fontSize={"subheading"}>
        {text}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
