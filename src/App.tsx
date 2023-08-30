import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SingleMatch from "./pages/SingleMatch";
import Home from "./pages/Home";
import { useNavigateSearch } from "./hooks/useNavigateSearch";
import { useGetMatchDetails } from "./hooks/useGetMatchDetails";
import { SingleMatchSchema } from "./types/types";
import { firstSeason} from "./utils/api";
import { Container } from "@mui/material";
import SingleMatchSummary from "./components/SingleMatch/SingleMatchSummary/SingleMatchSummary";
import Scores from "./components/SingleMatch/SingleMatchSummary/Scores";
import TimelineTable from "./components/SingleMatch/HighlightsTab/TimelineTable";
import Statistics from "./components/SingleMatch/StatisticsTab/Statistics";
import LineupsMobile from "./components/SingleMatch/LineupsTab/LineupsMobile";
import LineupsDesktop from "./components/SingleMatch/LineupsTab/LineupsDesktop";

const App: React.FC = () => {
  const [chosenMatch, setChosenMatch] = useState<SingleMatchSchema>();
  const [chosenSeasonID, setChosenSeasonID] = useState<string>(firstSeason);
  const { timeline, statistics, lineupsPlayersStatistics, callForMatchDetails } = useGetMatchDetails();
  const redirectToSingleMatchPage = useNavigateSearch();

  const handleChooseMatch = (singleMatch: SingleMatchSchema): void => {
    setChosenMatch(singleMatch);
    redirectToSingleMatchPage(singleMatch.matchID);
    callForMatchDetails(singleMatch.matchID)
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
                  element={<SingleMatch chosenMatch={chosenMatch} singleMatchSummary={
                                        <SingleMatchSummary chosenMatch={chosenMatch}>
                                            <Scores timeline={timeline} competitorType="home" stylesContainer="items-end" stylesIcon="mr-2" iconSize="20"/>
                                            <Scores timeline={timeline} competitorType="away" stylesContainer="items-start" stylesIcon="mr-2" iconSize="20"/>
                                        </SingleMatchSummary>}
                                        highlightsTab={<TimelineTable chosenMatch={chosenMatch} timeline={timeline}/>}
                                        statisticsTab={<Statistics chosenMatch={chosenMatch} statistics={statistics}/>}
                                        lineupsTab={<>
                                          <LineupsMobile chosenMatch={chosenMatch} lineups={lineupsPlayersStatistics}/>
                                          <LineupsDesktop chosenMatch={chosenMatch} lineups={lineupsPlayersStatistics}/>
                                        </>}
                  />}
            />)}
        </Routes>
    </Container>
  );
};

export default App;
