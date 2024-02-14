import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import AppBarTab from "./AppBarTab";

import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.background,
    display: "flex",
    flexDirection: "row",
    padding: 12,
  },
  item: {
    flexGrow: 1,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab styles={styles.item} text="Repositories" />
    </View>
  );
};

export default AppBar;
