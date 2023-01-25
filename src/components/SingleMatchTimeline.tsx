import React from "react";
import {SingleMatchSchema, SingleMatchTimelineSchema} from "../types/types";
import {Col, Container, Row, Table} from "react-bootstrap";

interface SingleMatchTimelineProps {
    chosenMatch: SingleMatchSchema;
    timeline: SingleMatchTimelineSchema[];
}


const SingleMatchTimeline: React.FC<SingleMatchTimelineProps> = ( {chosenMatch, timeline}) => {

    return (
        <Container className="shadow-lg w-75 rounded mt-5" style={{backgroundColor: "#A4BE7B"}}>
            <Row className="justify-content-center fw-bold mt-4">
                <Col xs lg="4" className="text-center fs-3">Timeline</Col>
            </Row>
            <Row className="mt-4">
                    {timeline.map((el, key) => (
                        <Row>
                            {(el.competitor === "home") ? <Col className="text-end">{el.type}</Col> : <Col></Col>}
                            <Col className="col-1 text-center">{el.matchTime}</Col>
                            {(el.competitor === "away") ? <Col>{el.type}</Col> : <Col></Col>}
                        </Row>
                    ))}

            </Row>
        </Container>
    )
}

export default SingleMatchTimeline
