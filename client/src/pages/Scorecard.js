import React from 'react'
import CourseData from '../components/CourseData'
import AddCourseData from '../components/AddCourseData'
import { Container, Button } from 'react-bootstrap'
import AddCourseModal from '../components/AddCourseModal'

const Scorecard = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Container className="mt-5 scoring__table">
            <h1>Welcome to the Scoring Table</h1>
                <div className="scoring__table-saved-courses">
                    <h2>Stored Courses</h2>
                    <CourseData />
                </div>
                <div className="scoring__table-buttons">
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg" onClick={() => setModalShow(true)}>
                            Add Course to Database
                        </Button>
                        <Button variant="success" size="lg">
                            Player Scorecard
                        </Button>
                    </div>
                </div>
            
            <AddCourseModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Container>
    )
}

export default Scorecard
