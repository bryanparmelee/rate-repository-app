import { Pressable } from "react-native";
import Text from "./Text";

const AppBarTab = ({ text, styles }) => {
  return (
    <Pressable style={styles}>
      <Text color={"white"} fontWeight={"bold"}>
        {text}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
