import React from "react";
import { SingleMatchSchema } from "../../../types/types";

interface SingleMatchTimelineProps {
  children: React.ReactNode;
  chosenMatch: SingleMatchSchema;
}

const paragraphStyle = "text-sm pt-3 pl-3 font-bold"

const OverviewTab: React.FC<SingleMatchTimelineProps> = ({ children, chosenMatch}) => {

  return (
      <>
          <p className={paragraphStyle}>Date: <span className=" font-normal">{chosenMatch.matchDate}</span></p>

          <p className={paragraphStyle}>Stadium name:  <span className="font-normal">{chosenMatch.stadiumName}</span></p>
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