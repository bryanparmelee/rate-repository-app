import { StyleSheet, FlatList, View } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

import Text from "./Text";

import RepositoryItem from "./RepositoryItem";

// import useRepositories from "../hooks/useRepositories";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  if (error) {
    console.log(error);
  }

  const { repositories } = data;

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem props={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryList;
