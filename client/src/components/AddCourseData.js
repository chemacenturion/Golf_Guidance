import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { ADD_COURSE_DATA } from '../utils/mutations';

function AddCourseData(props) {

    const [formState, setFormState] = useState({
        courseName: null,
        par: null,
        slopeRating: null,
        courseRating: null,
        holeOnePar: null,
        holeTwoPar: null,
        holeThreePar: null,
        holeFourPar: null,
        holeFivePar: null,
        holeSixPar: null,
        holeSevenPar: null,
        holeEightPar: null,
        holeNinePar: null,
        holeTenPar: null,
        holeElevenPar: null,
        holeTwelvePar: null,
        holeThirteenPar: null,
        holeFourteenPar: null,
        holeFifteenPar: null,
        holeSixteenPar: null,
        holeSeventeenPar: null,
        holeEighteenPar: null
    });

    const [addCourseData] = useMutation(ADD_COURSE_DATA);

    const onSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addCourseData({
            variables: {
                courseName: formState.courseName,
                par: formState.par,
                slopeRating: formState.slopeRating,
                courseRating: formState.courseRating,
                holeOnePar: formState.holeOnePar,
                holeTwoPar: formState.holeTwoPar,
                holeThreePar: formState.holeThreePar,
                holeFourPar: formState.holeFourPar,
                holeFivePar: formState.holeFivePar,
                holeSixPar: formState.holeSixPar,
                holeSevenPar: formState.holeSevenPar,
                holeEightPar: formState.holeEightPar,
                holeNinePar: formState.holeNinePar,
                holeTenPar: formState.holeTenPar,
                holeElevenPar: formState.holeElevenPar,
                holeTwelvePar: formState.holeTwelvePar,
                holeThirteenPar: formState.holeThirteenPar,
                holeFourteenPar: formState.holeFourteenPar,
                holeFifteenPar: formState.holeFifteenPar,
                holeSixteenPar: formState.holeSixteenPar,
                holeSeventeenPar: formState.holeSeventeenPar,
                holeEighteenPar: formState.holeEighteenPar
            },
        });
    }

    const onChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
    };

        return (
            <Form onSubmit={onSubmit}>
                    <Row>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm="2">Course Name</Form.Label>
                                <Col sm="2">
                                    <Form.Control placeholder="Enter Course Name.." name="courseName" onChange={onChange} />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm="2">Par</Form.Label>
                                <Col sm="2">
                                    <Form.Control placeholder="Enter Par For Course.." name="par" onChange={onChange} />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm="2">Slope Rating</Form.Label>
                                <Col sm="2">
                                    <Form.Control placeholder="Enter Slope Rating.." name="slopeRating" onChange={onChange} />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm="2">Course Rating</Form.Label>
                                <Col sm="2">
                                    <Form.Control placeholder="Enter Course Rating.." name="courseRating" onChange={onChange} />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm="2">Hole 1</Form.Label>
                                <Col sm="2">
                                    <Form.Control placeholder="Enter Par For Hole.." name="holeOnePar" onChange={onChange} />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm="2">Hole 2</Form.Label>
                                <Col sm="2">
                                    <Form.Control placeholder="Enter Par For Hole.." name="holeTwoPar" onChange={onChange} />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm="2">Hole 3</Form.Label>
                                <Col sm="2">
                                    <Form.Control placeholder="Enter Par For Hole.." name="holeThreePar" onChange={onChange} />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm="2">Hole 4</Form.Label>
                                <Col sm="2">
                                    <Form.Control placeholder="Enter Par For Hole.." name="holeFourPar" onChange={onChange} />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm="2">Hole 5</Form.Label>
                                <Col sm="2">
                                    <Form.Control placeholder="Enter Par For Hole.." name="holeFivePar" onChange={onChange} />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm="2">Hole 6</Form.Label>
                                <Col sm="2">
                                    <Form.Control placeholder="Enter Par For Hole.." name="holeSixPar" onChange={onChange} />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm="2">Hole 7</Form.Label>
                                <Col sm="2">
                                    <Form.Control placeholder="Enter Par For Hole.." name="holeSevenPar" onChange={onChange} />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm="2">Hole 8</Form.Label>
                                <Col sm="2">
                                    <Form.Control placeholder="Enter Par For Hole.." name="holeEightPar" onChange={onChange} />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm="2">Hole 9</Form.Label>
                                <Col sm="2">
                                    <Form.Control placeholder="Enter Par For Hole.." name="holeNinePar" onChange={onChange} />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm="2">Hole 10</Form.Label>
                                <Col sm="2">
                                    <Form.Control placeholder="Enter Par For Hole.." name="holeTenPar" onChange={onChange} />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm="2">Hole 11</Form.Label>
                                <Col sm="2">
                                    <Form.Control placeholder="Enter Par For Hole.." name="holeElevenPar" onChange={onChange} />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm="2">Hole 12</Form.Label>
                                <Col sm="2">
                                    <Form.Control placeholder="Enter Par For Hole.." name="holeTwelvePar" onChange={onChange} />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm="2">Hole 13</Form.Label>
                                <Col sm="2">
                                    <Form.Control placeholder="Enter Par For Hole.." name="holeThirteenPar" onChange={onChange} />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm="2">Hole 14</Form.Label>
                                <Col sm="2">
                                    <Form.Control placeholder="Enter Par For Hole.." name="holeFourteenPar" onChange={onChange} />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm="2">Hole 15</Form.Label>
                                <Col sm="2">
                                    <Form.Control placeholder="Enter Par For Hole.." name="holeFifteenPar" onChange={onChange} />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm="2">Hole 16</Form.Label>
                                <Col sm="2">
                                    <Form.Control placeholder="Enter Par For Hole.." name="holeSixteenPar" onChange={onChange} />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm="2">Hole 17</Form.Label>
                                <Col sm="2">
                                    <Form.Control placeholder="Enter Par For Hole.." name="holeSeventeenPar" onChange={onChange} />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm="2">Hole 18</Form.Label>
                                <Col sm="2">
                                    <Form.Control placeholder="Enter Par For Hole.." name="holeEighteenPar" onChange={onChange} />
                                </Col>
                        </Form.Group>
                    </Row>
                    <Button variant="secondary" size="lg" type="submit">
                        Add Course To Database
                    </Button>
                </Form>
        )
}

export default AddCourseData;