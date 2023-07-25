import React from "react";
import SingleMatchOverview from "../components/SingleMatch/SingleMatchOverview";
import SingleMatchTimeline from "../components/SingleMatch/SingleMatchTimeline";
import { SingleMatchSchema, SingleMatchTimelineSchema } from "../types/types";
import { Container } from "@mui/material";


interface SingleMatchDetailsProps {
  chosenMatch: SingleMatchSchema;
  timeline: SingleMatchTimelineSchema[];
}

const SingleMatch: React.FC<SingleMatchDetailsProps> = ({chosenMatch, timeline}) => {

  return (
      <>
          <Container>
              <SingleMatchOverview
                  chosenMatch={chosenMatch}
                  timeline={timeline}/>
              {/*<SingleMatchTimeline*/}
              {/*    chosenMatch={chosenMatch}*/}
              {/*    timeline={timeline}/>*/}
          </Container>
      </>
  );
};

export default SingleMatch;
