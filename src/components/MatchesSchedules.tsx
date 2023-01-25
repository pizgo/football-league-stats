import SeasonSelect from "./SeasonSelect";
import MatchesSchedulesTable from "./MatchesSchedulesTable";
import React, { useState } from "react";
import { useGetSeasonsID } from "../hooks/useGetSeasonsID";
import { useGetMatchesSchedules } from "../hooks/useGetMatchesSchedules";
import { SingleMatchSchema } from "../types/types";
import { Container, Row, Col } from "react-bootstrap"


interface MatchesSchedulesProps {
  choosingSingleMatch: (singleMatch: SingleMatchSchema) => void;
}

const MatchesSchedules: React.FC<MatchesSchedulesProps> = ({
  choosingSingleMatch,
}) => {
  const { seasonsDetails } = useGetSeasonsID();
  // const initialSeason = seasonsDetails[0].seasonID;
  // console.log(initialSeason);
  const [chosenSeasonID, setChosenSeasonID] =
    useState<string>("");
  const { matchesState, callForSchedulesData } =
    useGetMatchesSchedules(chosenSeasonID);
  const handleSelectSeasonID = (clickedChosenSeasonID: string): void => {
    setChosenSeasonID(clickedChosenSeasonID);
    callForSchedulesData(clickedChosenSeasonID);
  };

  return (
      <Container>
          <Row className="justify-content-center mb-5">
              <Col xs lg="4">
                  <SeasonSelect
                      onChangeSelect={handleSelectSeasonID}
                      seasonsDetails={seasonsDetails}
                      value={chosenSeasonID}
                  />
              </Col>
          </Row>
          <Row>
              <MatchesSchedulesTable
                  matchesResults={matchesState}
                  onChooseMatch={choosingSingleMatch}
              />
          </Row></Container>


  );
};

export default MatchesSchedules;
