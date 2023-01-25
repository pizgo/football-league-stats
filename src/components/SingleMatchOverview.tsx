import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import {SingleMatchSchema, SingleMatchTimelineSchema} from "../types/types";

interface SingleMatchOverviewProps {
    chosenMatch: SingleMatchSchema;
    timeline: SingleMatchTimelineSchema[];
}

const SingleMatchOverview: React.FC<SingleMatchOverviewProps> = ( {chosenMatch, timeline}) => {
    return (
        <Card className="w-75">
            <Row className="">
                <Col>
                    {chosenMatch.homeCompetitor.name}
                </Col>
                <Col className="text-center">
                    {chosenMatch.homeCompetitor.result} -{" "}
                    {chosenMatch.awayCompetitor.result}
                </Col>
                <Col className="text-end">
                    {chosenMatch.awayCompetitor.name}
                </Col>
            </Row>
        </Card>
    )
}

export default SingleMatchOverview