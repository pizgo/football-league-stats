import React from "react";
import { SingleMatchSchema, SingleMatchTimelineSchema } from "../../types/types";
import {Box, Paper} from "@mui/material";
import { BiFootball } from "react-icons/bi"
import {changePlayerNameFormat} from "../../utils/changePlayerNameFormat";
import {changeMatchTimeFormat} from "../../utils/changeMatchTimeFormat";

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
                <div className="col-span-6"> {timeline.map((el) => (
                    ((el.type === "score_change") && (el.competitor === "home")) ?
                        <div className="flex flex-col items-end mb-2">
                            <div className="flex items-center font-bold">
                                <BiFootball className="mr-2"/>
                                <p className="m-0"> {changeMatchTimeFormat(el.matchTime)}</p>
                            </div>
                            <p className="m-0"> {el.players ? changePlayerNameFormat(el.players[0].name) : ""}</p>
                        </div>
                        : null
                ))}
                </div>
                <div className="col-span-6"> {timeline.map((el) => (
                    ((el.type === "score_change") && (el.competitor === "away")) ?
                        <div className="flex flex-col items-start mb-2">
                            <div className="flex items-center font-bold">
                                <p className="m-0"> {changeMatchTimeFormat(el.matchTime)}</p>
                                <BiFootball className="ml-2"/>
                            </div>
                            <p className="m-0"> {el.players ? changePlayerNameFormat(el.players[0].name) : ""}</p>
                        </div>
                        : null
                ))}
                </div>
            </div>
        </Box>
    )
};

export default SingleMatchSummary