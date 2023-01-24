import React from "react";
import { MatchSchema } from "../types/types";

interface SingleMatchDetailsProps {
  chosenMatch: MatchSchema | undefined;
}

const SingleMatchDetails: React.FC<SingleMatchDetailsProps> = ({
  chosenMatch,
}) => {
  return <>{/*<p>{chosenMatch.homeCompetitor.name}</p>*/}</>;
};

export default SingleMatchDetails;
