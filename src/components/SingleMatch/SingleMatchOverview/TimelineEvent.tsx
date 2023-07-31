import React from "react";
import {
    Tooltip,
    TableCell,
    TableRow } from "@mui/material";
import ClickAwayListener from '@mui/material/ClickAwayListener';
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

interface TimelineEventProps {
    competitor: string,
    eventType: string,
    matchTime: number | undefined
    players: { name: string; type: string; }[] | undefined
}

const TimelineEvent: React.FC<TimelineEventProps> = ({competitor, eventType, matchTime, players}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setIsOpen(false);
    };
    const handleTooltipOpen = () => {
        setIsOpen(true)
    }

    const formattedEventType =  (type:string)  => {
        if (type === scoreChange) {
            return <BiFootball size={18}/>
        } else if (type === substitution) {
            return <HiOutlineSwitchHorizontal size={18}/>
        } else if (type === yellowCard) {
            return <div className="bg-yellow-500 w-4 h-5 rounded"/>
        } else if (type === redCard) {
            return <div className="bg-red-700 w-4 h-5 rounded"/>
        } else if (type === substitutedIn) {
            return <span className="text-winner">&#8593;</span>
        } else if (type === substitutedOut) {
            return <span className="text-lost">&#8595;</span>
        } else if (type === scorer) {
            return "scorer: "
        } else if (type === assist) {
            return " assist: "
        }
    }

    const tooltipMessage = (players: { name: string; type: string; }[] | undefined) => {
        if(players) {
            if(eventType === "substitution") {
                return (
                    players.map((el) => (
                        <div>{formattedEventType(el.type)} {changePlayerNameFormat(el.name)}</div>
                    ))
                )
            } else return (changePlayerNameFormat(players[0].name))
        } return null
    }

    return (
        //this solution is not effective (the need to go through all timeline events)
        <TableRow sx={{ "& td": { border: 0 } }}>
            {(competitor === "home") ?
                <TableCell className="text-end py-1 pr-2">
                    <div className="flex items-center justify-end">
                        <MobileTooltip message={tooltipMessage(players)}
                                       placement="left"
                                       timelineEvent={formattedEventType(eventType)}
                                       closeTooltip={handleTooltipClose}
                                       openTooltip={handleTooltipOpen}
                                       isTooltipOpen={isOpen}/>
                        <DesktopTooltip message={tooltipMessage(players)}
                                        placement="left"
                                        timelineEvent={formattedEventType(eventType)}
                                        closeTooltip={handleTooltipClose}/>
                    </div>
                </TableCell>
                : <TableCell></TableCell>}
            <TableCell className="text-center py-1 px-2 bg-primary-200 w-3 text-white">{changeMatchTimeFormat(matchTime)}</TableCell>
            {(competitor === "away") ?
                <TableCell className="text-end py-1 pr-2">
                    <div className="flex items-center justify-start">
                        <MobileTooltip message={tooltipMessage(players)}
                                       placement="right"
                                       timelineEvent={formattedEventType(eventType)}
                                       closeTooltip={handleTooltipClose}
                                       openTooltip={handleTooltipOpen}
                                       isTooltipOpen={isOpen}/>
                        <DesktopTooltip message={tooltipMessage(players)}
                                        placement="right"
                                        timelineEvent={formattedEventType(eventType)}
                                        closeTooltip={handleTooltipClose}/>
                    </div>
                </TableCell>
                : <TableCell></TableCell>}
        </TableRow>
    )
}

export default TimelineEvent;