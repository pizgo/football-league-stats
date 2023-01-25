import React from "react";
import {SingleMatchSchema, SingleMatchTimelineSchema} from "../types/types";
import {Card, Col, Container, Row} from "react-bootstrap";
import SingleMatchOverview from "./SingleMatchOverview";
import SingleMatchTimeline from "./SingleMatchTimeline";
import ButtonBackToSchedules from "./ButtonBackToSchedules"

interface SingleMatchDetailsProps {
  chosenMatch: SingleMatchSchema;
  timeline: SingleMatchTimelineSchema[];
}

const SingleMatchDetails: React.FC<SingleMatchDetailsProps> = ({
  chosenMatch,
    timeline
}) => {
    console.log(timeline)
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
