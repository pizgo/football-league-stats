import React from "react";
import { SingleMatchSchema } from "../../../types/types";

interface SingleMatchTimelineProps {
  children: React.ReactNode;
  chosenMatch: SingleMatchSchema;
}

const paragraphStyle = "text-sm text-center pt-3 pl-2 font-bold"

const OverviewTab: React.FC<SingleMatchTimelineProps> = ({ children, chosenMatch}) => {

  return (
      <>
          <p className={paragraphStyle}>Date:</p>
          <p className="text-center text-sm">{chosenMatch.matchDate}</p>
          <p className={paragraphStyle}>Stadium name:</p>
          <p className="text-center text-sm">{chosenMatch.stadiumName}</p>
          <p className={paragraphStyle}>Highlights:</p>
          <div className="grid grid-cols-12 px-3 py-4">
              <div className="col-span-6">
                  <p className="text-sm font-bold text-primary-200">{chosenMatch.homeCompetitor.name}</p>
              </div>
              <div className="col-span-6">
                  <p className="text-end text-sm font-bold text-primary-200">{chosenMatch.awayCompetitor.name}</p>
              </div>
          </div>
          {children}
    </>
  );
};
export default OverviewTab;