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
                      <TimelineEvent competitor={el.competitor} type={el.type} matchTime={el.matchTime} players={el.players}/>
                  ))}
              </Table>
    </>
  );
};

export default SingleMatchTimeline;