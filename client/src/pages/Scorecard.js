import React from 'react'
import CourseData from '../components/CourseData'
import AddCourseData from '../components/AddCourseData'
import { Container, Button } from 'react-bootstrap'

const Scorecard = () => {
    return (
        <Container className="mt-5 scoring__table">
            <h1>Welcome to the Scoring Table</h1>
                <div className="scoring__table-saved-courses">
                    <h2>Stored Courses</h2>
                    <CourseData />
                </div>
                <div className="scoring__table-buttons">
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg">
                            Add Course to Database
                        </Button>
                        <Button variant="success" size="lg">
                            Player Scorecard
                        </Button>
                    </div>
                </div>
            <AddCourseData />
        </Container>
    )
}

export default Scorecard
