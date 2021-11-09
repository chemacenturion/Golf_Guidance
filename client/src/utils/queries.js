import { gql } from '@apollo/client';

export const GET_COURSE_DATA = gql`
{
  course {
  courseName
  par
  courseRating
  slopeRating
  }
}
`;
