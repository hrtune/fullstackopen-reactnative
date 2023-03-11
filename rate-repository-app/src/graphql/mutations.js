import { gql } from "@apollo/client";

export const AUTHENTICATE = gql`
  mutation Authenticate($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput) {
    createReview(review: $review) {
      createdAt
      id
      rating
      text
      repository {
        name
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($user: CreateUserInput) {
    createUser(user: $user) {
      createdAt
      id
      username
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation DeleteReview($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
  }
`;
