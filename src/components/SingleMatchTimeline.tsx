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
            <Row>
                <Col>ddddd</Col>
            </Row>
        </Container>
    )
}

export default SingleMatchTimeline