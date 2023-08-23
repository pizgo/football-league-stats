import React from "react";
import {
    Paper,
    Table,
    TableCell, TableContainer, TableHead,
    TableRow
} from "@mui/material";
import { changeMatchTimeFormat } from "../../../utils/changeMatchTimeFormat";
import SingleTimelineEvent from "./SingleTimelineEvent";
import {SingleMatchSchema, SingleMatchTimelineSchema} from "../../../types/types";

interface TimelineEventProps {
    chosenMatch: SingleMatchSchema
    timeline: SingleMatchTimelineSchema[],
}

const TimelineTable: React.FC<TimelineEventProps> = ({chosenMatch, timeline}) => {

    return (
        <div className="flex justify-center">
            <TableContainer component={Paper} className="sm:w-4/5">
                <Table>
                    <TableHead className="">
                        <TableRow>
                            <TableCell className="text-center font-bold w-45/100 border-0">{chosenMatch.homeCompetitor.name}</TableCell>
                            <TableCell className="border-0">&nbsp;</TableCell>
                            <TableCell className="text-center font-bold w-45/100 border-0">{chosenMatch.awayCompetitor.name}</TableCell>
                        </TableRow>
                    </TableHead>
                    <tbody>
                    {timeline.map((el, index) => (
                        <TableRow key={index} sx={{ "& td": { border: 0 } }}>
                            <SingleTimelineEvent timelineEvent = {el}
                                                 competitorType="home"
                                                 homeCompetitorStyle="justify-end"
                                                 tooltipPlacement="left" />
                            <TableCell className="text-center py-1 px-2 bg-neutral-200 w-8 md:w-16 md:text-base">{changeMatchTimeFormat(el.matchTime)}</TableCell>
                            <SingleTimelineEvent competitorType="away"
                                                 timelineEvent={el}
                                                 homeCompetitorStyle="justify-start"
                                                 tooltipPlacement="right"/>
                        </TableRow>
                    ))}
                    </tbody>
                </Table>
            </TableContainer>
        </div>
    )
}
export default TimelineTable;