import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

import AppBarTab from "./AppBarTab";

import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.background,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 12,
  },
  item: {
    padding: 8,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab styles={styles.item} text="Repositories" path="/" />
        <AppBarTab styles={styles.item} text="Sign In" path="sign-in" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
