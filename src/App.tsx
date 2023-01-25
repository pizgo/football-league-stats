import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SingleMatchDetails from "./components/SingleMatchDetails/SingleMatchDetails";
import MatchesSchedules from "./components/MatchesSchedule/MatchesSchedules";
import { useNavigateSearch } from "./hooks/useNavigateSearch";
import { useGetMatchTimeline } from "./hooks/useGetMatchTimeline";
import { SingleMatchSchema } from "./types/types";
import { firstSeason } from "./consts/consts";
import { Container } from "react-bootstrap"

const App: React.FC = () => {
  const [chosenMatch, setChosenMatch] = useState<SingleMatchSchema>();
  const [chosenSeasonID, setChosenSeasonID] = useState<string>(firstSeason);
  const { timeline, callForMatchTimeline } = useGetMatchTimeline();
  const redirectToSingleMatchPage = useNavigateSearch();

  const handleChooseMatch = (singleMatch: SingleMatchSchema): void => {
    setChosenMatch(singleMatch);
    redirectToSingleMatchPage(singleMatch.matchID);
    callForMatchTimeline(singleMatch.matchID)
  };

  return (
    <Container className="mt-5 position-relative">
      <Routes>
        <Route
          path="/"
          element={<MatchesSchedules
              choosingSingleMatch={handleChooseMatch}
              chosenSeasonId={chosenSeasonID}
              setChosenSeasonId={setChosenSeasonID}
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
