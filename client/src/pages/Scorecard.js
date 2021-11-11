import React from 'react'
import CourseData from '../components/CourseData'
import { Container, Button, Row, Col } from 'react-bootstrap'
import AddCourseModal from '../components/AddCourseModal'
import ReactPlayer from 'react-player/youtube'

const Scorecard = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Container>
        <Row>
        <>
        <div className="mt-5 scoring__table">
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
                onHide={() => setModalShow(false)} />
            </div>
        </>
        <ReactPlayer url='https://youtu.be/QAoqOSOgEQQ' />
        <ReactPlayer url='https://youtu.be/O5U0XbrnSuA' />
        <ReactPlayer url='https://youtu.be/CgW8bVBZl9M' />
        <ReactPlayer url='https://youtu.be/9r5hhYklgLw' />
        <ReactPlayer url='https://youtu.be/nHSvrP2RiMo' />
        <ReactPlayer url='https://youtu.be/ijihpr5nFbU' />
        </Row>
        </Container>
    )
}

export default Scorecard
