import React from "react";
import { useQuery } from "@apollo/client";
import { GET_COURSE_DATA } from '../utils/queries'


function CourseData() {
  const { data, loading, error } = useQuery(GET_COURSE_DATA);

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

  return (
    <>
    <select name="course" onChange={onCourseSelected}>
    {data.course.map(course => (
      <option key={course.id} value={course.courseName}>
        {course.courseName}
      </option>
    ))}
  </select>
    </>
  );
}

export default CourseData