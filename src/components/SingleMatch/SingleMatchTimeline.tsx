import React from "react";
import { SingleMatchSchema, SingleMatchTimelineSchema } from "../../types/types";
import {Table, TableRow, TableCell, TableHead} from "@mui/material";
import {BiFootball} from "react-icons/bi";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

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

//
// const popover = (el: SingleMatchTimelineSchema) => {
//   return (
//     <Popover id="popover-basic">
//       <Popover.Body className="fw-bold">
//         <Col>{formattedEventType(el.type)}</Col>
//         {el.players ? el.players.map((el) => (
//               <Col>
//                 {el.name}, {formattedEventType(el.type)}
//               </Col>
//             )) : null}
//         <Col>'{el.matchTime}</Col>
//       </Popover.Body>
//     </Popover>
//   );
// };

const paragraphStyle = "text-sm pt-2 pl-2 font-bold"

const SingleMatchTimeline: React.FC<SingleMatchTimelineProps> = ({ chosenMatch, timeline}) => {

    const filteredTimeline = timeline.filter(el => (eventsForTimeline(el)))

     const formattedEventType =  (type:string)  => {
        // return type ? type.charAt(0).toUpperCase() + type.slice(1).replaceAll("_", " ") : ""
        if (type === 'score_change') {
            return <BiFootball className="text-md"/>
        } else if (type === "substitution") {
            return <HiOutlineSwitchHorizontal/>
        } else if (type === "yellow_card") {
            return <div className="bg-yellow-500 w-4 h-5 rounded"/>
        } else if (type === "red_card") {
            return <div className="bg-red-700 w-4 h-5 rounded"/>
        }
    }

  return (
      <>
          <p className={paragraphStyle}>Date: <span className="font-normal">{chosenMatch.matchDate}</span></p>
          <p className={paragraphStyle}>Stadium name: <span className="font-normal">{chosenMatch.stadiumName}</span></p>
          <p className={paragraphStyle}>Highlights:</p>
          <div className="grid grid-cols-12 p-2 gap-5">
              <div className="col-span-6">
                  <p className="text-sm">{chosenMatch.homeCompetitor.name}</p>
              </div>
              <div className="col-span-6">
                  <p className="text-end text-sm">{chosenMatch.awayCompetitor.name}</p>
              </div>
          </div>
              <Table className="">
                  {filteredTimeline.map((el, key) => (
                      <TableRow sx={{ "& td": { border: 0 } }}>
                          {(el.competitor === "home") ?
                              <TableCell className="text-end py-1">{formattedEventType(el.type)}</TableCell> : <TableCell></TableCell>}
                          <TableCell className="text-center py-1">{el.matchTime}'</TableCell>
                          {(el.competitor === "away") ?
                              <TableCell className="text-start py-1">{formattedEventType(el.type)}</TableCell> : <TableCell></TableCell>}
                          <TableCell></TableCell>
                      </TableRow>
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