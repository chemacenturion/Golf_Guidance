import React from "react";
import { useQuery } from "@apollo/client";
import { GET_COURSE_DATA } from '../utils/queries'


function CourseData() {
  const { data, loading, error } = useQuery(GET_COURSE_DATA);

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    if (data) {
        course = data.course
    }

  return (
    <div>
      <h1>Course Data</h1>
        {data.course.map((course) => (
          <>
          <p key={course.courseName}></p>
          <p key={course.par}></p>
          <p key={course.courseRating}></p>
          <p key={course.slopeRating}></p>
          </>
        ))}
    </div>
  );
}

export default CourseData