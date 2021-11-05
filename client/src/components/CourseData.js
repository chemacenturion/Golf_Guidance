import React from 'react'; 
import { useQuery } from '@apollo/client';
import { GET_COURSE_DATA } from '../utils/queries';

const CourseData = () => {
    const { loading, data } = useQuery(GET_COURSE_DATA);
    const courseStats = data?.courseStats || []; 


return (

    <div>
        {loading ? (
        <div>loading</div>
        ): (
            <p>{courseStats}</p>
        )}
    </div>
);
};

export default CourseData; 