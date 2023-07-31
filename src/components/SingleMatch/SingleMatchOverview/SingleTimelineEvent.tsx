import React from "react";
import {TableCell} from "@mui/material";
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
import {BiFootball} from "react-icons/bi";
import {HiOutlineSwitchHorizontal} from "react-icons/hi";
import {changePlayerNameFormat} from "../../../utils/changePlayerNameFormat";
import MobileTooltip from "./MobileTooltip";
import DesktopTooltip from "./DesktopTooltip";

export interface SingleTimelineEvent {
    competitorType: string,
    competitor: string,
    eventType: string,
    matchTime: number | undefined
    players: { name: string; type: string; }[] | undefined
    homeCompetitorStyle: string,
    tooltipPlacement?:
        | 'bottom-end'
        | 'bottom-start'
        | 'bottom'
        | 'left-end'
        | 'left-start'
        | 'left'
        | 'right-end'
        | 'right-start'
        | 'right'
        | 'top-end'
        | 'top-start'
        | 'top';
}
const SingleTimelineEvent: React.FC<SingleTimelineEvent> = ({ competitorType, competitor, eventType, matchTime, players,homeCompetitorStyle, tooltipPlacement}) => {
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
        <>
        {(competitor === competitorType) ?
            <TableCell className="text-end py-1 pr-2">
                <div className={`flex items-center ${homeCompetitorStyle}`}>
                    <MobileTooltip message={tooltipMessage(players)}
                                   placement={tooltipPlacement}
                                   timelineEvent={formattedEventType(eventType)}
                                   closeTooltip={handleTooltipClose}
                                   openTooltip={handleTooltipOpen}
                                   isTooltipOpen={isOpen}/>
                    <DesktopTooltip message={tooltipMessage(players)}
                                    placement={tooltipPlacement}
                                    timelineEvent={formattedEventType(eventType)}
                                    closeTooltip={handleTooltipClose}/>
                </div>
            </TableCell> : <TableCell></TableCell>}
        </>
    );
}

export default SingleTimelineEvent