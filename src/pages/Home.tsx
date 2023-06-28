import React, { Dispatch, SetStateAction } from "react";
import SeasonSelect from "../components/SeasonOverview/SeasonSelect";
import MatchesSchedulesTable from "../components/SeasonOverview/MatchesSchedulesTable";
import { useGetSeasonsID} from "../hooks/useGetSeasonsID";
import { useGetMatchesSchedules} from "../hooks/useGetMatchesSchedules";
import { SingleMatchSchema} from "../types/types";
import {Container} from "@mui/material";
import Legend from "../components/SeasonOverview/LegendItem";
import LegendItem from "../components/SeasonOverview/LegendItem";
import MatchesSchedulesTableMobile from "../components/SeasonOverview/MatchesSchedulesTableMobile";

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
        <Container className="">
            <h4 className="py-6">Overview of Ekstraklasa League Matches</h4>
            <SeasonSelect
                onChangeSelect={handleSelectSeasonID}
                seasonsDetails={seasonsDetails}
                value={chosenSeasonId}/>
            <div>
                <h5>Legend:</h5>
                <div className="flex flex-col items-start bg-white">
                    <LegendItem status={"winner team"}/>
                    <LegendItem status={"lost team"}/>
                    <LegendItem status={"tie"}/>
                </div>
            </div>
            <div className="md:hidden">
                <MatchesSchedulesTableMobile
                    matchesResults={matchesState}
                    onChooseMatch={choosingSingleMatch}/>
            </div>
            <div className="hidden md:block">
                <MatchesSchedulesTable
                    matchesResults={matchesState}
                    onChooseMatch={choosingSingleMatch}/>
            </div>
        </Container>
    );
};

export default Home;


