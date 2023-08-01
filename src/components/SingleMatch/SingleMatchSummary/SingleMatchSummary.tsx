import React from "react";
import { SingleMatchSchema, SingleMatchTimelineSchema } from "../../../types/types";
import {Box, Paper} from "@mui/material";
import Scores from "./Scores";

interface SingleMatchOverviewProps {
    chosenMatch: SingleMatchSchema;
    timeline: SingleMatchTimelineSchema[];
}

const SingleMatchSummary: React.FC<SingleMatchOverviewProps> = ({chosenMatch, timeline}) => {

    return (
        <Box component={Paper} className="bg-white w-full text-sm">
            <div className="grid grid-cols-12 gap-4 py-3">
                <div className="sm:hidden col-span-4 text-lg font-bold text-center py-2"> {chosenMatch.homeCompetitor.abbreviation}</div>
                <div className="col-span-4">
                    <Box component={Paper} className="m-0 text-xl font-bold text-white text-center bg-primary-200 py-2">
                        <p className="mb-1">{chosenMatch.homeCompetitor.result} - {chosenMatch.awayCompetitor.result}</p>
                        <p className="m-0 text-xs">Half-score:</p>
                        <p className="m-0 text-xs">{chosenMatch.homeCompetitor.halfScore} - {chosenMatch.awayCompetitor.halfScore}</p>
                    </Box>
                </div>
                <div className="sm:hidden col-span-4 text-lg font-bold text-center py-2"> {chosenMatch.awayCompetitor.abbreviation}</div>
               <Scores timeline={timeline} competitorType="home" stylesContainer="items-end" stylesIcon="mr-2"/>
               <Scores timeline={timeline} competitorType="away" stylesContainer="items-start" stylesIcon="mr-2"/>
            </div>
        </Box>
    )
};

export default SingleMatchSummary