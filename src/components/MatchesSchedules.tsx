import SeasonSelect from "./SeasonSelect";
import MatchesResultsTable from "./MatchesResultsTable";
import React, { useState } from "react";
import { useGetSeasonsID } from "../hooks/useGetSeasonsID";
import { useGetMatchesSchedules } from "../hooks/useGetMatchesSchedules";
import { SingleMatchSchema } from "../types/types";

interface MatchesSchedulesProps {
  choosingSingleMatch: (singleMatch: SingleMatchSchema) => void;
}

const MatchesSchedules: React.FC<MatchesSchedulesProps> = ({
  choosingSingleMatch,
}) => {
  const { seasonsDetails } = useGetSeasonsID();
  const [chosenSeasonID, setChosenSeasonID] =
    useState<string>("sr:season:77453");
  const { matchesState, callForSchedulesData } =
    useGetMatchesSchedules(chosenSeasonID);
  const handleSelectSeasonID = (clickedChosenSeasonID: string): void => {
    setChosenSeasonID(clickedChosenSeasonID);
    callForSchedulesData(clickedChosenSeasonID);
  };

  return (
    <>
      <SeasonSelect
        onChangeSelect={handleSelectSeasonID}
        seasonsDetails={seasonsDetails}
        value={chosenSeasonID}
      />
      <MatchesResultsTable
        matchesResults={matchesState}
        onChooseMatch={choosingSingleMatch}
      />
    </>
  );
};

export default MatchesSchedules;
