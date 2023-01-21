import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import SeasonSelect from "./components/SeasonSelect";
import MatchesResultsTable from "./components/MatchesResultsTable";
import SingleMatchInfo from "./components/SingleMatchInfo";
import { useFetchMatchesResults } from "./hooks/useFetchMatchesResults";

const App: React.FC = () => {
  const { matchesState, callForSchedulesData } = useFetchMatchesResults();

  callForSchedulesData();

  return (
    <>
      <SeasonSelect />
      {/*<MatchesResultsTable matchesResults={matchesState} />*/}
      <SingleMatchInfo />
    </>
  );
};

export default App;
