import React from "react";
import SeasonSelect from "./components/SeasonSelect";
import MatchesResultsTable from "./components/MatchesResultsTable";
import SingleMatchInfo from "./components/SingleMatchInfo";

function App() {
  return (
    <>
      <SeasonSelect />
      <MatchesResultsTable />
      <SingleMatchInfo />
    </>
  );
}

export default App;
