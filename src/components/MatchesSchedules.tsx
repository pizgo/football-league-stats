import SeasonSelect from "./SeasonSelect";
import MatchesSchedulesTable from "./MatchesSchedulesTable";
import React, {Dispatch, SetStateAction, useState} from "react";
import { useGetSeasonsID } from "../hooks/useGetSeasonsID";
import { useGetMatchesSchedules } from "../hooks/useGetMatchesSchedules";
import { SingleMatchSchema } from "../types/types";
import { Container, Row, Col } from "react-bootstrap"


interface MatchesSchedulesProps {
  choosingSingleMatch: (singleMatch: SingleMatchSchema) => void;
  chosenSeasonId : string;
  setChosenSeasonId? : Dispatch<SetStateAction<string>>
}

const MatchesSchedules: React.FC<MatchesSchedulesProps> = ({
  choosingSingleMatch,
    chosenSeasonId,
    setChosenSeasonId
}) => {
  const { seasonsDetails } = useGetSeasonsID();
  console.log(seasonsDetails)
  const { matchesState, callForSchedulesData } = useGetMatchesSchedules(chosenSeasonId);

  const handleSelectSeasonID = (clickedChosenSeasonID: string): void => {
      setChosenSeasonId?.(clickedChosenSeasonID);
    callForSchedulesData(clickedChosenSeasonID);
  };

  return (
      <Container>
          <Row className="justify-content-center mb-5">
              <Col xs lg="4">
                  <SeasonSelect
                      onChangeSelect={handleSelectSeasonID}
                      seasonsDetails={seasonsDetails}
                      value={chosenSeasonId}
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
