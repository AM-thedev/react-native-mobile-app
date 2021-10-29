import { gql } from '@apollo/client';


export const SIGNIN = gql`
  mutation signin($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const CREATEREVIEW = gql`
  mutation createreview($repositoryName: String!, $ownerName: String!, $rating: Int!, $text: String) {
    createReview(review: { repositoryName: $repositoryName, ownerName: $ownerName, rating: $rating, text: $text }) {
      repositoryId
    }
  }
`;

export const SIGNUP = gql`
  mutation signup($username: String!, $password: String!) {
    createUser(user: { username: $username, password: $password }) {
      id
      username
    }
  }
`;

export const DELETEREVIEW = gql`
  mutation delete($id: ID!) {
    deleteReview(id: $id)
  }
`;