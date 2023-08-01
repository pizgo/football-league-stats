import React from "react";
import { SingleMatchSchema, SingleMatchTimelineSchema } from "../../../types/types";
import { Table } from "@mui/material";

import TimelineEventRow from "./TimelineEventRow";

interface SingleMatchTimelineProps {
  chosenMatch: SingleMatchSchema;
  timeline: SingleMatchTimelineSchema[];
}

const paragraphStyle = "text-sm text-center pt-3 pl-2 font-bold"

const OverviewTab: React.FC<SingleMatchTimelineProps> = ({ chosenMatch, timeline}) => {

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
                  {timeline.map((el, key) => (
                      <TimelineEventRow competitor={el.competitor} eventType={el.type} matchTime={el.matchTime} players={el.players}/>
                  ))}
              </Table>
    </>
  );
};

export default OverviewTab;