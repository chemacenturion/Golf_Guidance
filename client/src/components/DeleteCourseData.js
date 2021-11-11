// import React from "react";
// import { useMutation } from '@apollo/client';
// import { REMOVE_COURSE_DATA } from "../utils/mutations";
// import { GET_COURSES } from "../utils/queries";

// Need to make this into a function and call the two mutations imported above - one to query all courses and one to delete one by id.

// const DeleteCourseData = ({id}) => {
//   return (
    
//       update={(cache, { data: { removeCourseData } }) => {
//         const { getCourses } = cache.readQuery({ query: GET_COURSES });
//         cache.writeQuery({
//           query: GET_COURSES,
//           data: { getCourses: getCourses.filter(e => e.id !== id)}
//         });
//       }}
//       {(removeCourseData, { data }) => (
//         <button
//           onClick={e => {
//             removeCourseData({
//               variables: {
//                 id
//               }
//             });
//           }}
//         >Delete</button>            
//       )}
//     </>
//   );
// };

// export default DeleteCourseData;