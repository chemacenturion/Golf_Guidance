import { gql } from '@apollo/client';

export const GET_COURSES = gql`
query courses {
  courses {
  courseName
  par
  courseRating
  slopeRating
  }
}
`;
