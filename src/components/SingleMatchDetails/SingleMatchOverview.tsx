import React from "react";
import { SingleMatchSchema, SingleMatchTimelineSchema } from "../../types/types";
import {
    Col,
    Container,
    Row} from "react-bootstrap";
import { BiFootball } from "react-icons/bi"

interface SingleMatchOverviewProps {
    chosenMatch: SingleMatchSchema;
    timeline: SingleMatchTimelineSchema[];
}

const SingleMatchOverview: React.FC<SingleMatchOverviewProps> = ( {chosenMatch, timeline}) => {

    return (
        <Container className="shadow-lg w-75 rounded mb-5"
                   style={{backgroundColor: "#FFFBF5"}}>
            <Row className="justify-content-center fw-bold mt-4">
                <Col xs lg="4" className="text-center">
                    Match date: {chosenMatch.matchDate}
                </Col>
            </Row>
            <Row className="fw-bold fs-4 mt-4">
                <Col className="col-lg-5 px-3 align-self-center">
                    {chosenMatch.homeCompetitor.name}
                </Col>
                <Col className="col-lg-2 fs-1 text-center rounded shadow"
                     style={{backgroundColor: "#E5BA73"}}>
                    {chosenMatch.homeCompetitor.result} -{" "}
                    {chosenMatch.awayCompetitor.result}
                </Col>
                <Col className="col-lg-5 px-3 align-self-center text-end">
                    {chosenMatch.awayCompetitor.name}
                </Col>
            </Row>
            <Row className="mt-3 mb-4">
                <Col>
                    {timeline.map((el) => (
                        ((el.type === "score_change") && (el.competitor === "home")) ?
                            <Row className="justify-content-end">
                                <Col className="col-8 text-end">
                                    {el.players ? el.players[0].name : ""}
                                </Col>
                                <Col className="col-1 text-end">
                                    '{el.matchTime}
                                </Col>
                                <Col className="col-2">
                                    <BiFootball/>
                                </Col>
                            </Row>: null
                    ))}
                </Col>
                <Col className="col-2 text-center">
                    <Row>
                        <Col>Half-score</Col>
                    </Row>
                    <Row>
                        <Col>{chosenMatch.homeCompetitor.halfScore} -{" "}
                            {chosenMatch.awayCompetitor.halfScore}
                        </Col>
                    </Row>
                </Col>
                <Col>
                    {timeline.map((el) => (
                        ((el.type === "score_change") && (el.competitor === "away")) ?
                            <Row className="">
                                <Col className="col-2 text-end">
                                    <BiFootball/>
                                </Col>
                                <Col className="col-1 text-start">
                                    '{el.matchTime}
                                </Col>
                                <Col className="col-8 text-start">
                                    {el.players ? el.players[0].name : ""}
                                </Col>
                            </Row>: null
                    ))}
                </Col>
            </Row>
        </Container>
    )
};

export default SingleMatchOverview