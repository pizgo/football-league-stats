import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SingleMatch from "./pages/SingleMatch";
import Home from "./pages/Home";
import { useNavigateSearch } from "./hooks/useNavigateSearch";
import { useGetMatchTimeline } from "./hooks/useGetMatchTimeline";
import { SingleMatchSchema } from "./types/types";
import { firstSeason} from "./utils/api";
import { Container } from "@mui/material";
import SingleMatchSummary from "./components/SingleMatch/SingleMatchSummary/SingleMatchSummary";
import HighlightsTab from "./components/SingleMatch/OverviewTab/HighlightsTab";
import Scores from "./components/SingleMatch/SingleMatchSummary/Scores";
import TimelineTable from "./components/SingleMatch/OverviewTab/TimelineTable";

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
    <Container className="bg-light-100 py-8 font-sans">
        <Routes>
          <Route
              path="/"
              element={<Home
                  choosingSingleMatch={handleChooseMatch}
                  chosenSeasonId={chosenSeasonID}
                  setChosenSeasonId={setChosenSeasonID}/>}
          />
          {chosenMatch && (
            <Route
                  path="/singleMatch"
                  element={<SingleMatch singleMatchSummary={
                                        <SingleMatchSummary chosenMatch={chosenMatch}>
                                            <Scores timeline={timeline} competitorType="home" stylesContainer="items-end" stylesIcon="mr-2" iconSize="20"/>
                                            <Scores timeline={timeline} competitorType="away" stylesContainer="items-start" stylesIcon="mr-2" iconSize="20"/>
                                        </SingleMatchSummary>}
                                        overviewTab={<HighlightsTab chosenMatch={chosenMatch}>
                                          <TimelineTable timeline={timeline}/>
                                        </HighlightsTab>}/>}
            />)}
        </Routes>
    </Container>
  );
};

export default App;
