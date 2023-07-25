import React from "react";
import { SingleMatchSchema, SingleMatchTimelineSchema } from "../../types/types";
import { Col,
  Container,
  Row,
  OverlayTrigger,
  Popover } from "react-bootstrap";
import {formattedEventType} from "../../utils/formattedEventType";
import {Box, Paper} from "@mui/material";

interface SingleMatchTimelineProps {
  chosenMatch: SingleMatchSchema;
  timeline: SingleMatchTimelineSchema[];
}

const typesToPopover = (el: SingleMatchTimelineSchema) => {
  return (
    el.type === "score_change" ||
    el.type === "yellow_card" ||
    el.type === "red_card" ||
    el.type === "penalty_awarded" ||
    el.type === "substitution"
  );
};

const popover = (el: SingleMatchTimelineSchema) => {
  return (
    <Popover id="popover-basic">
      <Popover.Body className="fw-bold">
        <Col>{formattedEventType(el.type)}</Col>
        {el.players ? el.players.map((el) => (
              <Col>
                {el.name}, {formattedEventType(el.type)}
              </Col>
            )) : null}
        <Col>'{el.matchTime}</Col>
      </Popover.Body>
    </Popover>
  );
};

const paragraphStyle = "text-sm m-1 font-bold"

const SingleMatchTimeline: React.FC<SingleMatchTimelineProps> = ({ chosenMatch, timeline}) => {

  return (
      <>
          <div className="bg-white">
              <p className={paragraphStyle}>Date: <span className="font-normal">{chosenMatch.matchDate}</span></p>
              <p className={paragraphStyle}>Stadium name: <span className="font-normal">{chosenMatch.stadiumName}</span></p>
              <p className={paragraphStyle}>Highlights:</p>
              <ul>

              </ul>
          </div>



    <Container className="shadow-lg w-50 rounded mt-5"
               style={{ backgroundColor: "#A4BE7B" }}>
      <Row className="justify-content-center fw-bold mt-4">
          <Col xs lg="4" className="text-center fs-3">
            Timeline
          </Col>
      </Row>
      <Row className="mt-4">
        {timeline.map((el, key) => (
          <Row key={el.id}>
            {el.competitor === "home" ? (typesToPopover(el) ? (
                <OverlayTrigger
                  trigger="click"
                  placement="left"
                  overlay={popover(el)}>
                    <Col className="text-end fw-bold" role="button">
                      {formattedEventType(el.type)}
                    </Col>
                </OverlayTrigger>) :
                    (<Col className="text-end">{formattedEventType(el.type)}</Col>)) :
                (<Col></Col>)}
            <Col className="col-1 text-center">{el.matchTime}</Col>
              {el.competitor === "away" ? (typesToPopover(el) ? (
                  <OverlayTrigger
                      trigger="click"
                      placement="right"
                      overlay={popover(el)}>
                      <Col className="text-start fw-bold" role="button">
                          {formattedEventType(el.type)}
                      </Col>
                  </OverlayTrigger>) :
                    (<Col className="text-start">{formattedEventType(el.type)}</Col>)) :
                  (<Col></Col>)}
          </Row>
        ))}
      </Row>
    </Container>
    </>
  );
};

export default SingleMatchTimeline;