import React from "react";
import { SingleMatchSchema, SingleMatchTimelineSchema } from "../../types/types";
import {Box, Container, Paper} from "@mui/material";
import { BiFootball } from "react-icons/bi"

interface SingleMatchOverviewProps {
    chosenMatch: SingleMatchSchema;
    timeline: SingleMatchTimelineSchema[];
}

const SingleMatchOverview: React.FC<SingleMatchOverviewProps> = ( {chosenMatch, timeline}) => {

    return (
        <Box component={Paper} className="bg-white w-full text-sm">
            <div className="flex items-center grid grid-cols-12 gap-4 py-3">
                <div className="sm:hidden col-span-4 text-lg font-bold text-center py-2"> {chosenMatch.homeCompetitor.abbreviation}</div>
                {/*<div className="hidden sm:block col-span-5 text-lg font-bold text-center"> {chosenMatch.homeCompetitor.name}</div>*/}
                <div className="col-span-4">
                    <Box component={Paper} className="m-0 text-xl font-bold text-white text-center bg-primary-200 py-2">
                        <p className="mb-1">{chosenMatch.homeCompetitor.result} - {chosenMatch.awayCompetitor.result}</p>
                        <p className="m-0 text-xs">Half-score:</p>
                        <p className="m-0 text-xs">{chosenMatch.homeCompetitor.halfScore} - {chosenMatch.awayCompetitor.halfScore}</p>
                    </Box>
                </div>
                <div className="sm:hidden col-span-4 text-lg font-bold text-center py-2"> {chosenMatch.awayCompetitor.abbreviation}</div>
                {/*<div className="hidden sm:block col-span-5 text-base font-bold text-center"> {chosenMatch.awayCompetitor.name}</div>*/}
                <div className="col-span-6"> {timeline.map((el) => (
                    ((el.type === "score_change") && (el.competitor === "home")) ?
                        <div className="flex items-center">
                            <BiFootball className="mr-2"/>
                            <p className="m-0"> {el.players ? el.players[0].name : ""} '{el.matchTime}</p>
                        </div>
                        : null
                ))}
                </div>
                <div className="col-span-6"> {timeline.map((el) => (
                    ((el.type === "score_change") && (el.competitor === "away")) ?
                        <div className="flex items-center">
                            <BiFootball className="mr-2"/>
                            <p className="m-0"> {el.players ? el.players[0].name : ""} '{el.matchTime}</p>
                        </div>
                        : null
                ))}
                </div>
            </div>
        </Box>
    )
};

export default SingleMatchOverview