import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import SeasonSelect from "./components/SeasonSelect";
import MatchesResultsTable from "./components/MatchesResultsTable";
import SingleMatchInfo from "./components/SingleMatchInfo";
import { useGetMatchesResults } from "./hooks/useGetMatchesResults";
import { useGetSeasonsID } from "./hooks/useGetSeasonsID";

const App: React.FC = () => {
  const { seasonsDetails } = useGetSeasonsID();
  let initialSeasonID = "sr:season:77453";
  const { matchesState, callForSchedulesData } =
    useGetMatchesResults(initialSeasonID);

  const handleSelectSeasonID = (chosenSeasonID: string): void => {
    callForSchedulesData(chosenSeasonID);
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
