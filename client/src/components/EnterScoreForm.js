import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

export default function EnterScoreForm({ selectedCourse }) {


    console.log("Selected course data: ", selectedCourse);


    const [formData, setFormData] = useState({
        holeOne: {
            par: 4,
            score: ""
        },
        holeTwo: {
            par: 4,
            score: ""
        },
        holeThree: {
            par: 4,
            score: ""
        },
        holeFour: {
            par: 4,
            score: ""
        },
        holeFive: {
            par: 5,
            score: ""
        },
        holeSix: {
            par: 4,
            score: ""
        },
        holeSeven: {
            par: 4,
            score: ""
        },
        holeEight: {
            par: 3,
            score: ""
        },
        holeNine: {
            par: 4,
            score: ""
        },
        holeTen: {
            par: 4,
            score: ""
        },
        holeEleven: {
            par: 3,
            score: ""
        },
        holeTwelve: {
            par: 4,
            score: ""
        },
        holeThirteen: {
            par: 4,
            score: ""
        },
        holeFourteen: {
            par: 5,
            score: ""
        },
        holeFifteen: {
            par: 4,
            score: ""
        },
        holeSixteen: {
            par: 4,
            score: ""
        },
        holeSeventeen: {
            par: 4,
            score: ""
        },
        holeEighteen: {
            par: 4,
            score: ""
        }
    })

    return (
        <div>
            <Form>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Hole One</Form.Label>
                            <Form.Control name="holeOne" value={formData.holeOne.score} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <h5>par: {selectedCourse.scorecard.holeOne.par}</h5>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Hole Two</Form.Label>
                            <Form.Control name="holeTwo" value={formData.holeTwo.score} />

                        </Form.Group>
                    </Col>
                    <Col>
                        <h5>par: {selectedCourse.scorecard.holeTwo.par}</h5>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Hole Three</Form.Label>
                            <Form.Control name="holeThree" value={formData.holeThree.score} />
                        </Form.Group>
                        <Col>
                            <h5>par: {selectedCourse.scorecard.holeThree.par}</h5>
                        </Col>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Hole Four</Form.Label>
                            <Form.Control name="holeFour" value={formData.holeFour.score} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <h5>par: {selectedCourse.scorecard.holeFour.par}</h5>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Hole Five</Form.Label>
                            <Form.Control name="holeFive" value={formData.holeFive.score} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <h5>par: {selectedCourse.scorecard.holeFive.par}</h5>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Hole Six</Form.Label>
                            <Form.Control name="holeSix" value={formData.holeSix.score} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <h5>par: {selectedCourse.scorecard.holeFive.par}</h5>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Hole Seven</Form.Label>
                    <Form.Control name="holeSeven" value={formData.holeSeven.score} />
                    <h5>par: {selectedCourse.scorecard.holeSeven.par}</h5>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Hole Eight</Form.Label>
                    <Form.Control name="holeEight" value={formData.holeEight.score} />
                    <h5>par: {selectedCourse.scorecard.holeEight.par}</h5>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Hole Nine</Form.Label>
                    <Form.Control name="holeNine" value={formData.holeNine.score} />
                    <h5>par: {selectedCourse.scorecard.holeNine.par}</h5>
                </Form.Group>

                <Button variant="primary" >
                    Submit
                </Button>
            </Form>
        </div>
    )
}
