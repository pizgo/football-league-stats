import React from "react";
import SingleMatchOverview from "./SingleMatchOverview";
import SingleMatchTimeline from "./SingleMatchTimeline/SingleMatchTimeline";
import ButtonBackToSchedules from "./ButtonBackToSchedules";
import { SingleMatchSchema, SingleMatchTimelineSchema } from "../../types/types";
import { Container } from "react-bootstrap";

interface SingleMatchDetailsProps {
  chosenMatch: SingleMatchSchema;
  timeline: SingleMatchTimelineSchema[];
}

const SingleMatchDetails: React.FC<SingleMatchDetailsProps> = ({chosenMatch, timeline}) => {

  return (
      <>
          <ButtonBackToSchedules/>
          <Container className="d-flex flex-column align-items-center">
              <SingleMatchOverview
                  chosenMatch={chosenMatch}
                  timeline={timeline}/>
              <SingleMatchTimeline
                  chosenMatch={chosenMatch}
                  timeline={timeline}/>
          </Container>
      </>
  );
};

export default SingleMatchDetails;
