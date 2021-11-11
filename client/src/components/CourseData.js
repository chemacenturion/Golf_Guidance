import React from "react";
import { useQuery } from "@apollo/client";
import { GET_COURSES } from '../utils/queries'
import { Button } from 'react-bootstrap'
import { useMutation } from '@apollo/client'; 
import { REMOVE_COURSE_DATA } from '../utils/mutations'; 
import Auth from '../utils/auth';


function CourseData() {
  const { data } = useQuery(GET_COURSES);
  const [removeCourse, { error, loading }] = useMutation(REMOVE_COURSE_DATA);

  const courses = data?.getCourses || [];
  console.log(courses);



  const handleDeleteCourse = async (courseId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    // if(!token) {
    //   return false;
    // }
    try {
      const { data } = await removeCourse({
        variables: { courseId },
      });
    } catch (err) {
      console.error(err);
    } finally {
      window.location.reload()
    }
  };

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (

    <div>
      <ul className="course__database">
        {courses && courses.map((items) => (
          <li key={items._id} >
            {items.courseName}
            <Button variant="danger" className='m-1' size="sm"
              onClick={() => handleDeleteCourse(items._id)}>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
              </svg> */}
              Delete
            </Button>
          </li>
        ))}
      </ul>


    </div>

  );
};

export default CourseData