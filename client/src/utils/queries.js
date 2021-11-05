import { gql } from '@apollo/client';

export const GET_COURSE_DATA = gql`
  query getCourseData {
  courseName
  holeCount
  par
  courseRating
  slopeRating
}
`;
