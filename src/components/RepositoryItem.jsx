import { View } from "react-native";

import Text from "./Text";

const RepositoryItem = ({ props }) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
  } = props;

  return (
    <View>
      <Text color={"primary"}>
        Fullname: {fullName}
        {"\n"}
        Description: {description}
        {"\n"}
        Language: {language}
        {"\n"}
        Forks: {forksCount}
        {"\n"}
        Stars: {stargazersCount}
        {"\n"}
        Rating: {ratingAverage} {"\n"}
        Reviews: {reviewCount}
      </Text>
    </View>
  );
};

export default RepositoryItem;
