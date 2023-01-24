import React from "react";
import {SingleMatchSchema, SingleMatchTimelineSchema} from "../types/types";
import { Link } from "react-router-dom";

interface SingleMatchDetailsProps {
  chosenMatch: SingleMatchSchema;
  timeline: SingleMatchTimelineSchema[];
}

const SingleMatchDetails: React.FC<SingleMatchDetailsProps> = ({
  chosenMatch,
    timeline
}) => {
    console.log(timeline)
  return (
    <>
      <p>{chosenMatch.homeCompetitor.name}</p>
        {timeline.map((el, key) => (
            <p>{el.type}</p>
        ))}

      <Link to="/">
        <button>Back</button>
      </Link>
    </>
  );
};

export default SingleMatchDetails;
