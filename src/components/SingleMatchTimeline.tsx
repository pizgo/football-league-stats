import React from "react";
import {SingleMatchSchema, SingleMatchTimelineSchema} from "../types/types";
import {Col, Container, Row} from "react-bootstrap";

interface SingleMatchTimelineProps {
    chosenMatch: SingleMatchSchema;
    timeline: SingleMatchTimelineSchema[];
}
const SingleMatchTimeline: React.FC<SingleMatchTimelineProps> = ( {chosenMatch, timeline}) => {
    return (
        <Container className="shadow-lg w-75 rounded mt-5" style={{backgroundColor: "#A4BE7B"}}>
            <Row className="justify-content-center fw-bold mt-4">
                <Col xs lg="4" className="text-center">Timeline</Col>
            </Row>
        </Container>
    )
}

export default SingleMatchTimeline
