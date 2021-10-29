import { gql } from '@apollo/client';

export const CORE_REPOSITORY = gql`
  fragment CoreRepository on Repository {
    id
    ownerAvatarUrl
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    url
  }
`;

// other fragments...