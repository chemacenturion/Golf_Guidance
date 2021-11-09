import React from "react";
import { useQuery } from "@apollo/client";
import { GET_COURSE_DATA } from '../utils/queries'


function CourseData() {
    const { data, loading } = useQuery(GET_COURSE_DATA);

    const course = data?.course || [];

  return (
    <>
        <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {/* If the data is still loading, render a loading message */}
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              course={course}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CourseData