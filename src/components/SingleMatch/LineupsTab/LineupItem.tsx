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

interface StatisticsProps {
    playerType: string,
    lineups?: PlayerStatistics[]
}

const LineupItem: React.FC<StatisticsProps> = ({ playerType, lineups}) => {
    const formattedStatistics =  (type:string)  => {
        if (type === goalsScoredLineup) {
            return <BiFootball size={18}/>
        }
        if (type === redCardsLineup) {
            return <span className="bg-red-700 w-4 h-5 rounded"/>
        }
       if (type === yellowCardsLineup) {
            return <span className="bg-yellow-500 w-4 h-5 rounded"/>
        }
       if (type === substitutedInLineup) {
            return <span className="text-winner">&#8593;</span>
        }
       if (type === substitutedOutLineup) {
            return <span className="text-lost">&#8595;</span>
       }
    }

    return (
        <div className="col-span-12">
            <div className="row-auto font-bold text-base text-primary-200 border-b  my-3">{playerType}</div>
            <ul>
                {lineups?.map((player) => (
                    <li key={player.name}>
                        <div className="flex w-full flex-row mb-1">
                            <span className="w-4 text-end">{player.jersey_number}</span>
                            <div className="flex flex-row ml-3 items-center">
                                <span className="mr-2">{player.name}</span>
                                {player.statistics.map((el) => (
                                    <span className="align-center">{formattedStatistics(el)}</span>))}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default LineupItem;