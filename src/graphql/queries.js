import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Edges {
    repositories {
      edges {
        node {
          forksCount
          fullName
          description
          language
          id
          ownerAvatarUrl
          ratingAverage
          reviewCount
          stargazersCount
        }
      }
    }
  }
`;
