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
                <Col xs lg="4" className="text-center">Timeline</Col>
            </Row>
            <Row>
                <Table responsive className="border-rounded">
                    {timeline.map((el, key) => (
                        <tr>
                            {(el.competitor === "home") ? <td>{el.type}</td> : <td></td>}
                            <td>{el.matchTime}</td>
                            {(el.competitor === "away") ? <td>{el.type}</td> : <td></td>}
                        </tr>
                    ))}
                </Table>
            </Row>
        </Container>
    )
}

export default SingleMatchTimeline
