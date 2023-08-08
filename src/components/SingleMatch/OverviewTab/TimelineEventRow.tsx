import React from "react";
import {
    Table,
    TableCell,
    TableRow
} from "@mui/material";
import {changeMatchTimeFormat} from "../../../utils/changeMatchTimeFormat";
import SingleTimelineEvent from "./SingleTimelineEvent";
import {SingleMatchTimelineSchema} from "../../../types/types";

interface TimelineEventProps {
    timeline: SingleMatchTimelineSchema[]
}

const TimelineEventRow: React.FC<TimelineEventProps> = ({timeline}) => {

    return (
        <Table className="mb-4">
            <tbody>
            {timeline.map((el, key) => (
                <TableRow sx={{ "& td": { border: 0 } }}>
                    <SingleTimelineEvent timelineEvent = {el}
                                         competitorType="home"
                                         homeCompetitorStyle="justify-end"
                                         tooltipPlacement="left" />
                    <TableCell className="text-center py-1 px-2 bg-primary-200 w-8 md:w-16 text-white md:text-base">{changeMatchTimeFormat(el.matchTime)}</TableCell>
                    <SingleTimelineEvent competitorType="away"
                                         timelineEvent={el}
                                         homeCompetitorStyle="justify-start"
                                         tooltipPlacement="right"/>
                </TableRow>
            ))}
            </tbody>
        </Table>
    )
}
export default TimelineEventRow;