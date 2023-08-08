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
import {SingleMatchTimelineSchema} from "../../../types/types";

export interface SingleTimelineEvent {
    timelineEvent: SingleMatchTimelineSchema
    competitorType: string,
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
const SingleTimelineEvent: React.FC<SingleTimelineEvent> = ({ timelineEvent,
                                                                competitorType,
                                                                homeCompetitorStyle,
                                                                tooltipPlacement}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setIsOpen(false);
    };
    const handleTooltipOpen = () => {
        setIsOpen(true)
    }

    const formattedEventType =  (type:string)  => {
        if (type === scoreChange) {
            return <BiFootball size={20}/>
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
            if(timelineEvent.type === "substitution") {
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
        {(timelineEvent.competitor === competitorType) ?
            <TableCell className="text-end py-1 pr-2">
                <div className={`flex items-center ${homeCompetitorStyle}`}>
                    <MobileTooltip message={tooltipMessage(timelineEvent.players)}
                                   placement={tooltipPlacement}
                                   timelineEvent={formattedEventType(timelineEvent.type)}
                                   closeTooltip={handleTooltipClose}
                                   openTooltip={handleTooltipOpen}
                                   isTooltipOpen={isOpen}/>
                    <DesktopTooltip message={tooltipMessage(timelineEvent.players)}
                                    placement={tooltipPlacement}
                                    timelineEvent={formattedEventType(timelineEvent.type)}
                                    closeTooltip={handleTooltipClose}/>
                </div>
            </TableCell> : <TableCell></TableCell>}
        </>
    );
}
export default SingleTimelineEvent