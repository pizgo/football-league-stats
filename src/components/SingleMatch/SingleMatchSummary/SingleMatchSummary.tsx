import React from "react";
import { SingleMatchSchema } from "../../../types/types";
import {Box, Paper} from "@mui/material";

interface SingleMatchOverviewProps {
    children: React.ReactNode;
    chosenMatch: SingleMatchSchema;
}

const SingleMatchSummary: React.FC<SingleMatchOverviewProps> = ({children, chosenMatch}) => {

    return (
        <Box component={Paper} className="bg-white w-full text-sm">
            <div className="grid grid-cols-12 gap-6 py-4 sm:py-6">
                <div className="sm:hidden col-span-4 text-lg font-bold text-center py-2"> {chosenMatch.homeCompetitor.abbreviation}</div>
                <div className="hidden sm:flex col-span-4 text-lg font-bold text-center py-2 px-6"> {chosenMatch.homeCompetitor.name}</div>
                <div className="col-span-4">
                    <Box component={Paper} className="m-0 text-xl font-bold text-white text-center bg-primary-200 py-2">
                        <p className="mb-1">{chosenMatch.homeCompetitor.result} - {chosenMatch.awayCompetitor.result}</p>
                        <p className="m-0 text-xs">Half-score:</p>
                        <p className="m-0 text-xs">{chosenMatch.homeCompetitor.halfScore} - {chosenMatch.awayCompetitor.halfScore}</p>
                    </Box>
                </div>
                <div className="sm:hidden col-span-4 text-lg font-bold text-center py-2"> {chosenMatch.awayCompetitor.abbreviation}</div>
                <div className="hidden sm:flex col-span-4 text-lg font-bold text-center py-2 px-6"> {chosenMatch.awayCompetitor.name}</div>
                {children}
            </div>
        </Box>
    )
};
export default SingleMatchSummary