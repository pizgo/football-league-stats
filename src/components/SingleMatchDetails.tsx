import React from "react";
import { SingleMatchSchema } from "../types/types";

interface SingleMatchDetailsProps {
  chosenMatch: SingleMatchSchema;
}

const SingleMatchDetails: React.FC<SingleMatchDetailsProps> = ({
  chosenMatch,
}) => {
  return <>{<p>{chosenMatch.homeCompetitor.name}</p>}</>;
};

export default SingleMatchDetails;
