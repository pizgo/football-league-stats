import React, { Dispatch, SetStateAction } from "react";
import SeasonSelect from "../components/SeasonOverview/SeasonSelect";
import Timetable from "../components/SeasonOverview/Timetable";
import { useGetSeasonsID} from "../hooks/useGetSeasonsID";
import { useGetMatchesSchedules} from "../hooks/useGetMatchesSchedules";
import { SingleMatchSchema} from "../types/types";
import {Box, Container, Paper} from "@mui/material";
import LegendItem from "../components/SeasonOverview/LegendItem";
import MatchesSchedulesTableMobile from "../components/SeasonOverview/TimetableMobile";

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
            <h4 className="my-4 m-0">Ekstraklasa League Timetable</h4>
            <SeasonSelect
                onChangeSelect={handleSelectSeasonID}
                seasonsDetails={seasonsDetails}
                value={chosenSeasonId}/>
            <Box component={Paper} className="flex items-center bg-white mb-4 ps-3 sm:max-w-xs" >
                <p className="mb-0">Legend:</p>
                <div className="flex">
                    <LegendItem status={"winner"}/>
                    <LegendItem status={"lost"}/>
                    <LegendItem status={"tie"}/>
                </div>
            </Box>
            <div className="">
                    <MatchesSchedulesTableMobile
                        matchesResults={matchesState}
                        onChooseMatch={choosingSingleMatch}/>
            </div>
            {/*<div className="hidden sm:block">*/}
            {/*    <Timetable*/}
            {/*        matchesResults={matchesState}*/}
            {/*        onChooseMatch={choosingSingleMatch}/>*/}
            {/*</div>*/}
        </Container>
    );
};

export default Home;


