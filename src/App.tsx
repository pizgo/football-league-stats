import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import SeasonSelect from "./components/SeasonSelect";
import MatchesResultsTable from "./components/MatchesResultsTable";
import SingleMatchInfo from "./components/SingleMatchInfo";
import { useGetMatchesSchedules } from "./hooks/useGetMatchesSchedules";
import { useGetSeasonsID } from "./hooks/useGetSeasonsID";
import { useGetMatchDetails } from "./hooks/useGetMatchDetails";

const App: React.FC = () => {
  const { seasonsDetails } = useGetSeasonsID();
  let initialSeasonID = "sr:season:77453";
  const { matchesState, callForSchedulesData } =
    useGetMatchesSchedules(initialSeasonID);

  const { callForMatchData } = useGetMatchDetails();

  const handleSelectSeasonID = (chosenSeasonID: string): void => {
    callForSchedulesData(chosenSeasonID);
    callForMatchData();
  };

  return (
    <>
      <SeasonSelect
        onChangeSelect={handleSelectSeasonID}
        seasonsDetails={seasonsDetails}
        value={initialSeasonID}
      />
      <MatchesResultsTable matchesResults={matchesState} />
      <SingleMatchInfo />
    </>
  );
};

export default App;
