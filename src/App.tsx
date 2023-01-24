import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import SingleMatchDetails from "./components/SingleMatchDetails";
import { SingleMatchSchema } from "./types/types";
import MatchesSchedules from "./components/MatchesSchedules";
import { useNavigateSearch } from "./hooks/useNavigateSearch";

const App: React.FC = () => {
  const [chosenMatch, setChosenMatch] = useState<SingleMatchSchema>();
  const redirectToSingleMatchPage = useNavigateSearch();

  const handleChooseMatch = (singleMatch: SingleMatchSchema): void => {
    setChosenMatch(singleMatch);
    redirectToSingleMatchPage(singleMatch.matchID);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<MatchesSchedules choosingSingleMatch={handleChooseMatch} />}
        />
        {chosenMatch && (
          <Route
            path="/singleMatch"
            element={<SingleMatchDetails chosenMatch={chosenMatch} />}
          />
        )}
      </Routes>
    </>
  );
};

export default App;
