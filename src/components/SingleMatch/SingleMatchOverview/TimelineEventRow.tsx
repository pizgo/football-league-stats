import React from "react";
import {
    TableCell,
    TableRow } from "@mui/material";
import {BiFootball} from "react-icons/bi";
import {HiOutlineSwitchHorizontal} from "react-icons/hi";
import {changePlayerNameFormat} from "../../../utils/changePlayerNameFormat";
import {
    assist,
    redCard,
    scoreChange,
    scorer,
    substitutedIn,
    substitutedOut,
    substitution,
    yellowCard
} from "../../../utils/consts";
import {changeMatchTimeFormat} from "../../../utils/changeMatchTimeFormat";
import MobileTooltip from "./MobileTooltip";
import DesktopTooltip from "./DesktopTooltip";
import SingleTimelineEvent from "./SingleTimelineEvent";

interface TimelineEventProps {
    competitor: string,
    eventType: string,
    matchTime: number | undefined
    players: { name: string; type: string; }[] | undefined
}

const TimelineEventRow: React.FC<TimelineEventProps> = ({competitor, eventType, matchTime, players}) => {

    return (
        <TableRow sx={{ "& td": { border: 0 } }}>
            <SingleTimelineEvent competitorType="home"
                                 competitor={competitor}
                                 eventType={eventType}
                                 matchTime={matchTime}
                                 players={players}
                                 homeCompetitorStyle="justify-end"
                                 tooltipPlacement="left" />
            <TableCell className="text-center py-1 px-2 bg-primary-200 w-3 text-white">{changeMatchTimeFormat(matchTime)}</TableCell>
            <SingleTimelineEvent competitorType="away"
                                 competitor={competitor}
                                 eventType={eventType}
                                 matchTime={matchTime}
                                 players={players}
                                 homeCompetitorStyle="justify-start"
                                 tooltipPlacement="right"/>
        </TableRow>
    )
}

export default TimelineEventRow;