import React, { Dispatch, SetStateAction } from "react";
import SeasonSelect from "../components/SeasonOverview/SeasonSelect";
import MatchesSchedulesTable from "../components/SeasonOverview/MatchesSchedulesTable";
import { useGetSeasonsID} from "../hooks/useGetSeasonsID";
import { useGetMatchesSchedules} from "../hooks/useGetMatchesSchedules";
import { SingleMatchSchema} from "../types/types";
import {
    Container,
    Row,
    Col } from "react-bootstrap";

interface MatchesSchedulesProps {
    choosingSingleMatch: (singleMatch: SingleMatchSchema) => void;
    chosenSeasonId: string;
    setChosenSeasonId?: Dispatch<SetStateAction<string>>;
}

const Home: React.FC<MatchesSchedulesProps> = ({choosingSingleMatch, chosenSeasonId, setChosenSeasonId}) => {

    const { seasonsDetails } = useGetSeasonsID();
    const { matchesState, callForSchedulesData } = useGetMatchesSchedules(chosenSeasonId);

    const handleSelectSeasonID = (clickedChosenSeasonID: string): void => {
        setChosenSeasonId?.(clickedChosenSeasonID);
        callForSchedulesData(clickedChosenSeasonID);
    };

    return (
        <Container>
            <Row className="justify-content-center mb-5">
                <Col xs lg="4">
                    <h3 className="text-center">Choose season to display</h3>
                </Col>
            </Row>
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
            </Row>
        </Container>
    );
};

export default Home;


