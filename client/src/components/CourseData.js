import React from "react";
import { useQuery } from "@apollo/client";
import { GET_COURSES } from '../utils/queries'
import { Button } from  'react-bootstrap'


function CourseData() {
    const { data, loading } = useQuery(GET_COURSES);

    const courses = data?.getCourses || []; 
    console.log(data?.getCourses)

    return (
    
      <div>
          {courses && courses.map((items) => (
        <ul className="course__database" key={items._id}>
            <li>
              {items.courseName}
              <br/>
              <Button variant="secondary" className='m-1' size="sm">
              Edit
              </Button>
              <Button variant="danger" className='m-1' size="sm">
              Delete
              </Button>
              </li>
            
        </ul>
            
        ))}
      </div>

  );
};

export default CourseData