import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import SingleMatchDetails from "./components/SingleMatchDetails";
import { SingleMatchSchema } from "./types/types";
import MatchesSchedules from "./components/MatchesSchedules";

const App: React.FC = () => {
  const [chosenMatch, setChosenMatch] = useState<SingleMatchSchema>();

  const handleChooseMatch = (singleMatch: SingleMatchSchema): void => {
    setChosenMatch(singleMatch);
  };

  return (
    <>
      <MatchesSchedules choosingSingleMatch={handleChooseMatch} />
      {chosenMatch && <SingleMatchDetails chosenMatch={chosenMatch} />}
    </>
  );
};

export default App;
