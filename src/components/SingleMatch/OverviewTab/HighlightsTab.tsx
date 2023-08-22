import React from "react";
import { SingleMatchSchema } from "../../../types/types";

interface SingleMatchTimelineProps {
  children: React.ReactNode;
  chosenMatch: SingleMatchSchema;
}

const HighlightsTab: React.FC<SingleMatchTimelineProps> = ({ children, chosenMatch}) => {

  return (
      <>
          {children}
      </>
  );
};
export default HighlightsTab;