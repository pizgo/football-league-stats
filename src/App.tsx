import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import SeasonSelect from "./components/SeasonSelect";
import MatchesResultsTable from "./components/MatchesResultsTable";
import SingleMatchDetails from "./components/SingleMatchDetails";
import { useGetMatchesSchedules } from "./hooks/useGetMatchesSchedules";
import { useGetSeasonsID } from "./hooks/useGetSeasonsID";
import { useGetMatchDetails } from "./hooks/useGetMatchDetails";
import { MatchSchema } from "./types/types";

const App: React.FC = () => {
  const { seasonsDetails } = useGetSeasonsID();
  let initialSeasonID = "sr:season:77453";
  const { matchesState, callForSchedulesData } =
    useGetMatchesSchedules(initialSeasonID);
  const { callForMatchData } = useGetMatchDetails();
  const [chosenMatch, setChosenMatch] = useState<MatchSchema>();

  const handleSelectSeasonID = (chosenSeasonID: string): void => {
    callForSchedulesData(chosenSeasonID);
    callForMatchData();
  };

  const handleChooseMatch = (singleMatch: MatchSchema): void => {
    setChosenMatch(singleMatch);
  };

  return (
    <>
      <SeasonSelect
        onChangeSelect={handleSelectSeasonID}
        seasonsDetails={seasonsDetails}
        value={initialSeasonID}
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
