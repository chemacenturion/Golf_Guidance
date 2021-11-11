import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import AddCourseData from './AddCourseData';

export default function AddCourseModal(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Course To Database
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddCourseData />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
