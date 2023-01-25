import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import SingleMatchDetails from "./components/SingleMatchDetails";
import { SingleMatchSchema } from "./types/types";
import MatchesSchedules from "./components/MatchesSchedules";
import { useNavigateSearch } from "./hooks/useNavigateSearch";
import { useGetMatchTimeline } from "./hooks/useGetMatchTimeline";
import { Container } from "react-bootstrap"

const App: React.FC = () => {
  const [chosenMatch, setChosenMatch] = useState<SingleMatchSchema>();
  const { timeline, callForMatchTimeline } = useGetMatchTimeline();
  const redirectToSingleMatchPage = useNavigateSearch();

  const handleChooseMatch = (singleMatch: SingleMatchSchema): void => {
    setChosenMatch(singleMatch);
    redirectToSingleMatchPage(singleMatch.matchID);
    callForMatchTimeline(singleMatch.matchID)
  };

  return (
    <Container className="mt-5">
      <Routes>
        <Route
          path="/"
          element={<MatchesSchedules
              choosingSingleMatch={handleChooseMatch}
          />}
        />
        {chosenMatch && (
          <Route
            path="/singleMatch"
            element={<SingleMatchDetails chosenMatch={chosenMatch}
            timeline={timeline}/>}
          />
        )}
      </Routes>
    </Container>
  );
};

export default App;
