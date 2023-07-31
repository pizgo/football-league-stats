import React from "react";
import { SingleMatchSchema, SingleMatchTimelineSchema } from "../../types/types";
import { Table } from "@mui/material";

import TimelineEvent from "./TimelineEvent";

interface SingleMatchTimelineProps {
  chosenMatch: SingleMatchSchema;
  timeline: SingleMatchTimelineSchema[];
}

const eventsForTimeline = (el: SingleMatchTimelineSchema) => {
  return (
    el.type === "score_change" ||
    el.type === "yellow_card" ||
    el.type === "red_card" ||
    el.type === "penalty_awarded" ||
    el.type === "substitution"
  );
};

const paragraphStyle = "text-sm text-center pt-3 pl-2 font-bold"

const SingleMatchTimeline: React.FC<SingleMatchTimelineProps> = ({ chosenMatch, timeline}) => {

    const filteredTimeline = timeline.filter(el => (eventsForTimeline(el)))

  return (
      <>
          <p className={paragraphStyle}>Date:</p>
          <p className="text-center text-sm">{chosenMatch.matchDate}</p>
          <p className={paragraphStyle}>Stadium name:</p>
          <p className="text-center text-sm">{chosenMatch.stadiumName}</p>
          <p className={paragraphStyle}>Highlights:</p>
          <div className="grid grid-cols-12 px-3 py-4">
              <div className="col-span-6">
                  <p className="text-sm font-bold text-primary-200">{chosenMatch.homeCompetitor.name}</p>
              </div>
              <div className="col-span-6">
                  <p className="text-end text-sm font-bold text-primary-200">{chosenMatch.awayCompetitor.name}</p>
              </div>
          </div>
              <Table className="mb-4">
                  {filteredTimeline.map((el, key) => (
                      // <TableRow sx={{ "& td": { border: 0 } }}>
                      //     {(el.competitor === "home") ?
                      //         <TableCell className="text-end py-1 pr-2">
                      //             <div className="flex items-center justify-end">{formattedEventType(el.type)}</div></TableCell> : <TableCell></TableCell>}
                      //     <TableCell className="text-center py-1 px-2 bg-primary-200 w-3 text-white">{el.matchTime}'</TableCell>
                      //     {(el.competitor === "away") ?
                      //         <TableCell className="text-start py-1 pl-2">
                      //             <div className="flex items-center">{formattedEventType(el.type)}</div></TableCell> : <TableCell></TableCell>}
                      // </TableRow>
                      <TimelineEvent competitor={el.competitor} type={el.type} matchTime={el.matchTime} players={el.players}/>
                  ))}
              </Table>

    {/*<Container className="shadow-lg w-50 rounded mt-5"*/}
    {/*           style={{ backgroundColor: "#A4BE7B" }}>*/}
    {/*  <Row className="justify-content-center fw-bold mt-4">*/}
    {/*      <Col xs lg="4" className="text-center fs-3">*/}
    {/*        Timeline*/}
    {/*      </Col>*/}
    {/*  </Row>*/}
    {/*  <Row className="mt-4">*/}
    {/*    {timeline.map((el, key) => (*/}
    {/*      <Row key={el.id}>*/}
    {/*        {el.competitor === "home" ? (typesToPopover(el) ? (*/}
    {/*            <OverlayTrigger*/}
    {/*              trigger="click"*/}
    {/*              placement="left"*/}
    {/*              overlay={popover(el)}>*/}
    {/*                <Col className="text-end fw-bold" role="button">*/}
    {/*                  {formattedEventType(el.type)}*/}
    {/*                </Col>*/}
    {/*            </OverlayTrigger>) :*/}
    {/*                (<Col className="text-end">{formattedEventType(el.type)}</Col>)) :*/}
    {/*            (<Col></Col>)}*/}
    {/*        <Col className="col-1 text-center">{el.matchTime}</Col>*/}
    {/*          {el.competitor === "away" ? (typesToPopover(el) ? (*/}
    {/*              <OverlayTrigger*/}
    {/*                  trigger="click"*/}
    {/*                  placement="right"*/}
    {/*                  overlay={popover(el)}>*/}
    {/*                  <Col className="text-start fw-bold" role="button">*/}
    {/*                      {formattedEventType(el.type)}*/}
    {/*                  </Col>*/}
    {/*              </OverlayTrigger>) :*/}
    {/*                (<Col className="text-start">{formattedEventType(el.type)}</Col>)) :*/}
    {/*              (<Col></Col>)}*/}
    {/*      </Row>*/}
    {/*    ))}*/}
    {/*  </Row>*/}
    {/*</Container>*/}
    </>
  );
};

export default SingleMatchTimeline;