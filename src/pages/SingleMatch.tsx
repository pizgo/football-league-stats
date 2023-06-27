import React from "react";
import SingleMatchOverview from "../components/SingleMatch/SingleMatchOverview";
import SingleMatchTimeline from "../components/SingleMatch/SingleMatchTimeline";
import { SingleMatchSchema, SingleMatchTimelineSchema } from "../types/types";
import {Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";

interface SingleMatchDetailsProps {
  chosenMatch: SingleMatchSchema;
  timeline: SingleMatchTimelineSchema[];
}

const SingleMatch: React.FC<SingleMatchDetailsProps> = ({chosenMatch, timeline}) => {

  return (
      <>
          <Link to="/">
              <Button
                  variant="light"
                  size="lg"
                  className="position-fixed px-5 fw-bold"
                  style={{ backgroundColor: "#D9D9D6" }}>
                  <BiArrowBack />
              </Button>
          </Link>
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

export default SingleMatch;
