import React from "react";
import { SingleMatchSchema } from "../../../types/types";
import {Box, Paper} from "@mui/material";

interface SingleMatchOverviewProps {
    children: React.ReactNode;
    chosenMatch: SingleMatchSchema;
}

const SingleMatchSummary: React.FC<SingleMatchOverviewProps> = ({children, chosenMatch}) => {

    return (
        <Box component={Paper} className="bg-white w-full text-sm md:text-base">
            <div className="grid grid-cols-12 gap-6 py-4 sm:py-6">
                <p className="sm:hidden col-span-4 text-lg font-bold self-center text-center py-2"> {chosenMatch.homeCompetitor.abbreviation}</p>
                <p className="hidden sm:block col-span-4 text-lg font-bold text-center self-center py-2 px-6"> {chosenMatch.homeCompetitor.name}</p>
                <div className="col-span-4">
                    <Box component={Paper} className="m-0 text-xl font-bold text-white text-center bg-primary-200 py-2">
                        <p className="mb-1">{chosenMatch.homeCompetitor.result} - {chosenMatch.awayCompetitor.result}</p>
                        <p className="m-0 text-xs md:text-sm">Half-score:</p>
                        <p className="m-0 text-xs md:text-sm">{chosenMatch.homeCompetitor.halfScore} - {chosenMatch.awayCompetitor.halfScore}</p>
                    </Box>
                </div>
                <p className="sm:hidden col-span-4 text-lg font-bold text-center self-center py-2"> {chosenMatch.awayCompetitor.abbreviation}</p>
                <p className="hidden sm:flex col-span-4 text-lg font-bold text-center self-center py-2 px-6"> {chosenMatch.awayCompetitor.name}</p>
                {children}
            </div>
        </Box>
    )
};
export default SingleMatchSummary