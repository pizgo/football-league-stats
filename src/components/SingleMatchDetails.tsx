import React from "react";
import { SingleMatchSchema } from "../types/types";
import { Link } from "react-router-dom";

interface SingleMatchDetailsProps {
  chosenMatch: SingleMatchSchema;
}

const SingleMatchDetails: React.FC<SingleMatchDetailsProps> = ({
  chosenMatch,
}) => {
  return (
    <>
      <p>{chosenMatch.homeCompetitor.name}</p>
      <Link to="/">
        <button>Back</button>
      </Link>
    </>
  );
};

export default SingleMatchDetails;
