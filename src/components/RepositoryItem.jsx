import { View, Image, StyleSheet, Pressable } from "react-native";

import Text from "./Text";

import theme from "../theme";

const RepositoryItem = ({ props }) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  } = props;

  const parseStat = (stat) => {
    if (stat >= 1000) {
      return (stat / 1000).toFixed(1) + "k";
    }
    return stat;
  };

  const styles = StyleSheet.create({
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 5,
    },
    container: {
      display: "flex",
      width: "full",
      gap: 8,
      padding: 8,
    },
    info: {
      display: "flex",
      flexDirection: "row",
      gap: 12,
    },
    infoDetails: {
      display: "flex",
      gap: 4,
      padding: 8,
    },
    stats: {
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      justifyContent: "space-around",
      padding: 8,
    },
    statDetail: {
      display: "flex",
      alignItems: "center",
    },
    languageButton: {
      alignSelf: "flex-start",
      padding: 4,
      backgroundColor: theme.colors.primary,
      borderRadius: 5,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image
          style={styles.avatar}
          source={{ uri: `${ownerAvatarUrl}` }}
        ></Image>
        <View style={styles.infoDetails}>
          <Text fontWeight={"bold"}>{fullName}</Text>
          <Text>{description}</Text>

          <Pressable style={styles.languageButton}>
            <Text color={"white"}>{language}</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.stats}>
        <View style={styles.statDetail}>
          <Text fontWeight={"bold"}>{parseStat(stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.statDetail}>
          <Text fontWeight={"bold"}>{parseStat(forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.statDetail}>
          <Text fontWeight={"bold"}>{parseStat(reviewCount)}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.statDetail}>
          <Text fontWeight={"bold"}>{ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
