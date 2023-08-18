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

const TimelineTable: React.FC<TimelineEventProps> = ({timeline}) => {

    const position = (matchTime: number | undefined) => {
        let left = "left-["+ matchTime + "%]"
        console.log(matchTime, left)
        return left
    }
    return (
        <>
            <Table className="mb-12">
                <tbody>
                {timeline.map((el, key) => (
                    <TableRow sx={{ "& td": { border: 0 } }}>
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
            <div className="overflow-x-scroll">
                <div className="relative w-[800px] h-1 bg-primary-100 m-12">
                    {timeline.map((el, key) => (
                        <div className={`absolute bottom-1/2 translate-y-1/2 z-30 bg-white h-6 w-8 md:text-base`}
                             style={{left: `${el.matchTime}%`}}>
                            <p className="text-center">{changeMatchTimeFormat(el.matchTime)}</p>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}
export default TimelineTable;