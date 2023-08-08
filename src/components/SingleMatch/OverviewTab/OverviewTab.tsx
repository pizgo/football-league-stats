import React from "react";
import { SingleMatchSchema } from "../../../types/types";
import { changeDateFormat } from "../../../utils/changeDateFormat";

interface SingleMatchTimelineProps {
  children: React.ReactNode;
  chosenMatch: SingleMatchSchema;
}

const OverviewTab: React.FC<SingleMatchTimelineProps> = ({ children, chosenMatch}) => {

  return (
      <>
          <p className="font-bold">Date: <span className=" font-normal">{changeDateFormat(chosenMatch.matchDate)}</span></p>
          <p className="font-bold">Stadium name:  <span className="font-normal">{chosenMatch.stadiumName}</span></p>
          <p className="font-bold mt-4">Highlights:</p>
          <div className="grid grid-cols-12 py-4 font-bold text-primary-200 text-center">
              <div className="col-span-6">
                  <p>{chosenMatch.homeCompetitor.name}</p>
              </div>
              <div className="col-span-6">
                  <p>{chosenMatch.awayCompetitor.name}</p>
              </div>
          </div>
          {children}
    </>
  );
};
export default OverviewTab;