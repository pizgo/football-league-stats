import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import SeasonSelect from "./components/SeasonSelect";
import MatchesResultsTable from "./components/MatchesResultsTable";
import SingleMatchDetails from "./components/SingleMatchDetails";
import { useGetMatchesSchedules } from "./hooks/useGetMatchesSchedules";
import { useGetSeasonsID } from "./hooks/useGetSeasonsID";
import { MatchSchema } from "./types/types";

const App: React.FC = () => {
  const { seasonsDetails } = useGetSeasonsID();
  const [chosenSeasonID, setChosenSeasonID] =
    useState<string>("sr:season:77453");
  const { matchesState, callForSchedulesData } =
    useGetMatchesSchedules(chosenSeasonID);
  const [chosenMatch, setChosenMatch] = useState<MatchSchema>();

  const handleSelectSeasonID = (clickedChosenSeasonID: string): void => {
    setChosenSeasonID(clickedChosenSeasonID);
    callForSchedulesData(clickedChosenSeasonID);
  };

  const handleChooseMatch = (singleMatch: MatchSchema): void => {
    setChosenMatch(singleMatch);
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
        onChooseMatch={handleChooseMatch}
      />
      {chosenMatch && <SingleMatchDetails chosenMatch={chosenMatch} />}
    </>
  );
};

export default App;
