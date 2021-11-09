import { gql } from '@apollo/client';

export const GET_COURSES = gql`
query courses {
  courses {
  _id
  courseName
  par
  slopeRating
  }
}
`;
