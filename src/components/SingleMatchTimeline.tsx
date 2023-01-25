import React from "react";
import {SingleMatchSchema, SingleMatchTimelineSchema} from "../types/types";
import {Col, Container, Row, OverlayTrigger, Popover} from "react-bootstrap";
import { BiFootball } from "react-icons/bi"

interface SingleMatchTimelineProps {
    chosenMatch: SingleMatchSchema;
    timeline: SingleMatchTimelineSchema[];
}

const typesToPopover = (el: SingleMatchTimelineSchema) => {
    return (
        (el.type === "score_change") ||
        (el.type === "yellow_card") ||
        (el.type === "red_card") ||
        (el.type === "penalty_awarded") ||
        (el.type === "substitution"))
}
const popover = (el : SingleMatchTimelineSchema) => {
    return (
        <Popover id="popover-basic">
            <Popover.Body className="fw-bold">
                <Col>{el.type}</Col>
                {/*{el.players ? <Col>{el.players[0].name}</Col> : null}*/}
                {el.players ?
                    el.players.map((el) => (
                        <Col>{el.name}, {el.type}</Col>
                    )) : null }

                <Col>'{el.matchTime}</Col>
            </Popover.Body>
        </Popover>
    )
}

const SingleMatchTimeline: React.FC<SingleMatchTimelineProps> = ( {chosenMatch, timeline}) => {

    return (
     <Container className="shadow-lg w-50 rounded mt-5" style={{backgroundColor: "#A4BE7B"}}>
            <Row className="justify-content-center fw-bold mt-4">
                <Col xs lg="4" className="text-center fs-3">Timeline</Col>
            </Row>
            <Row className="mt-4">
                    {timeline.map((el, key) => (
                        <Row>
                            {(el.competitor === "home") ?
                                ( typesToPopover(el) ?
                                    <OverlayTrigger trigger="click" placement="left" overlay={popover(el)}>
                                        <Col className="text-end pointer-event" role="button">{el.type}</Col>
                                    </OverlayTrigger> :
                                <Col className="text-end">{el.type}</Col>) :
                                <Col></Col>}
                            <Col className="col-1 text-center">{el.matchTime}</Col>
                            {(el.competitor === "away") ?
                                ( typesToPopover(el) ?
                                    <OverlayTrigger trigger="click" placement="right" overlay={popover(el)}>
                                        <Col className="text-start pointer-event" role="button">{el.type}</Col>
                                    </OverlayTrigger> :
                                    <Col className="text-start">{el.type}</Col>) :
                                <Col></Col>}
                        </Row>
                    ))}

            </Row>
        </Container>
    )
}

export default SingleMatchTimeline
