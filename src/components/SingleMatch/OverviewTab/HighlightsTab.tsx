import React from "react";
import { SingleMatchSchema } from "../../../types/types";

interface SingleMatchTimelineProps {
  children: React.ReactNode;
  chosenMatch: SingleMatchSchema;
}

const HighlightsTab: React.FC<SingleMatchTimelineProps> = ({ children, chosenMatch}) => {

  return (
      <>
          {/*<div className="grid grid-cols-12 py-4 font-bold text-primary-200 text-center">*/}
          {/*    <div className="col-span-6">*/}
          {/*        <p>{chosenMatch.homeCompetitor.name}</p>*/}
          {/*    </div>*/}
          {/*    <div className="col-span-6">*/}
          {/*        <p>{chosenMatch.awayCompetitor.name}</p>*/}
          {/*    </div>*/}
          {/*</div>*/}
          {children}
    </>
  );
};
export default HighlightsTab;