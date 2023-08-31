import React from "react";
import { PlayerStatistics } from "../../../types/types";
import {
    redCardsLineup,
    substitutedInLineup,
    substitutedOutLineup,
    yellowCardsLineup
} from "../../../utils/consts";
import {BiFootball} from "react-icons/bi";
import {goalsScoredLineup} from "../../../utils/consts";
import {formatStatisticsLineups} from "../../../utils/formatStatisticsLineups";

interface LineupItem {
    lineups?: PlayerStatistics[]
    type: string,
    competitorType: string
}

interface SideItem {
    player: PlayerStatistics
}

const LeftSideItem: React.FC<SideItem> = ({player}) => {

    return (
        <div className="flex w-full flex-row mb-1">
            <span className="w-4 text-end">{player.jersey_number}</span>
            <div className="flex flex-row ml-3 items-center">
                <span className="mr-2">{player.name}</span>
                {player.statistics.map((el) => (
                    <span className="align-center">{formatStatisticsLineups(el)}</span>))}
            </div>
        </div>
    )
}

const LineupItem: React.FC<LineupItem> = ({lineups, type, competitorType}) => {

    const typeToRender = (lineups: PlayerStatistics[] | undefined, type: string) => {
        if (type === "goalkeeper") {
            return lineups?.filter((player) => (player.type === type) && player.starter)
        } else if (type === "defender") {
            return lineups?.filter((player) => (player.type === "defender") && player.starter)
        } else if (type === "midfielder") {
            return lineups?.filter((player) => (player.type === "midfielder") && player.starter)
        } else if (type === "forwards") {
            return lineups?.filter((player) => (player.type === "forward") && player.starter)
        } else if (type === "substitutes") {
            return lineups?.filter((player) => !player.starter)
        }
    }

    const players = typeToRender(lineups, type)
    // const formattedStatistics =  (type:string)  => {
    //     if (type === goalsScoredLineup) {
    //         return <BiFootball size={18}/>
    //     }
    //     if (type === redCardsLineup) {
    //         return <span className="bg-red-700 w-4 h-5 rounded"/>``
    //     }
    //    if (type === yellowCardsLineup) {
    //         return <span className="bg-yellow-500 w-4 h-5 rounded"/>
    //     }
    //    if (type === substitutedInLineup) {
    //         return <span className="text-winner">&#8593;</span>
    //     }
    //    if (type === substitutedOutLineup) {
    //         return <span className="text-lost">&#8595;</span>
    //    }
    // }


    return (
        <>
            <ul className="sm:hidden">
                {players?.map((player) => (
                    <li key={player.name}>
                        <div className="flex w-full flex-row mb-1">
                            <span className="w-4 text-end">{player.jersey_number}</span>
                            <div className="flex flex-row ml-3 items-center">
                                <span className="mr-2">{player.name}</span>
                                {player.statistics.map((el) => (
                                    <span className="align-center">{formatStatisticsLineups(el)}</span>))}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <ul className="hidden sm:block">
                {players?.map((player) => (
                    <li key={player.name}>
                        {(competitorType === "home")
                            ?
                            <div className="flex w-full flex-row mb-1">
                                <span className="w-4 text-end">{player.jersey_number}</span>
                                <div className="flex flex-row ml-3 items-center">
                                    <span className="mr-2">{player.name}</span>
                                    {player.statistics.map((el) => (
                                        <span className="align-center">{formatStatisticsLineups(el)}</span>))}
                                </div>
                            </div>
                            :
                            <div className="flex w-full flex-row mb-1 justify-end">
                                <div className="flex flex-row mr-3 items-center">
                                    {player.statistics.map((el) => (
                                        <span className="align-center">{formatStatisticsLineups(el)}</span>))}
                                    <span className="ml-2">{player.name}</span>
                                </div>
                                <span className="w-4 text-end">{player.jersey_number}</span>
                            </div>
                        }
                    </li>
                ))}
            </ul>
        </>
    )
}
export default LineupItem;