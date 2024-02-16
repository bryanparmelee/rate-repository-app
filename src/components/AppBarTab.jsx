import { View } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";

const AppBarTab = ({ text, styles, path }) => {
  return (
    <Link to={path}>
      <View style={styles}>
        <Text color={"white"} fontWeight={"bold"}>
          {text}
        </Text>
      </View>
    </Link>
  );
};

export default AppBarTab;
