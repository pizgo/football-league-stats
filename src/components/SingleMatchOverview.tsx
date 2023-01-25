import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {SingleMatchSchema, SingleMatchTimelineSchema} from "../types/types";



interface SingleMatchOverviewProps {
    chosenMatch: SingleMatchSchema;
    timeline: SingleMatchTimelineSchema[];
}

const SingleMatchOverview: React.FC<SingleMatchOverviewProps> = ( {chosenMatch, timeline}) => {
    return (
        <Container className="shadow-lg w-75 rounded" style={{backgroundColor: "#FFFBF5"}}>
            <Row className="justify-content-center fw-bold mt-3">
                <Col xs lg="4" className="text-center">
                    Match date: {chosenMatch.matchDate}
                </Col>
            </Row>
            <Row className="fw-bold fs-3 mt-3">
                <Col className="col-lg-5 px-3 align-self-center">
                    {chosenMatch.homeCompetitor.name}
                </Col>
                <Col className="col-lg-2 text-center rounded shadow" style={{backgroundColor: "#E5BA73", fontSize: "40px"}}>
                    {chosenMatch.homeCompetitor.result} -{" "}
                    {chosenMatch.awayCompetitor.result}
                </Col>
                <Col className="col-lg-5 px-3 align-self-center text-end">
                    {chosenMatch.awayCompetitor.name}
                </Col>
            </Row>
            <Row className="my-3">
                <Col></Col>
                <Col className=" text-center">
                    <Row>
                        <Col>Half-score</Col>
                    </Row>
                    <Row>
                        <Col>{chosenMatch.homeCompetitor.halfScore} -{" "}
                            {chosenMatch.awayCompetitor.halfScore}</Col>
                    </Row>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default SingleMatchOverview