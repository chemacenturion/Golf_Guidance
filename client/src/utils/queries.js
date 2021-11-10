import { gql } from '@apollo/client';

export const GET_COURSES = gql`
query getCourses {
  getCourses {
    courseName
    par
    courseRating
    slopeRating
  }
}`
export const GET_MERCH = gql`
query getMerch {
  merch {
    name
    description
    image
    price
    quantity
  }
}
`;
