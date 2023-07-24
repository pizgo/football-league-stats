import React, { Dispatch, SetStateAction } from "react";
import SeasonSelect from "../components/SeasonOverview/SeasonSelect";
import { useGetSeasonsID} from "../hooks/useGetSeasonsID";
import { useGetMatchesSchedules} from "../hooks/useGetMatchesSchedules";
import { SingleMatchSchema} from "../types/types";
import {Box, Container, Paper} from "@mui/material";
import LegendItem from "../components/SeasonOverview/LegendItem";
import Timetable from "../components/SeasonOverview/Timetable";

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
        <Container className="font-sans">
            <h5 className="my-4">Ekstraklasa League Timetable</h5>
            <p className="mb-2 text-sm md:text-base">Choose a season to display and click on the match to see more details</p>
            <SeasonSelect
                onChangeSelect={handleSelectSeasonID}
                seasonsDetails={seasonsDetails}
                value={chosenSeasonId}/>
            <Box component={Paper} className="flex items-center bg-white mb-4 ps-3 sm:max-w-xs" >
                <p className="mb-0 text-sm md:text-base">Legend:</p>
                <div className="flex">
                    <LegendItem status={"winner"}/>
                    <LegendItem status={"lost"}/>
                    <LegendItem status={"tie"}/>
                </div>
            </Box>
            <Timetable
                matchesResults={matchesState}
                onChooseMatch={choosingSingleMatch}/>
        </Container>
    );
};

export default Home;


