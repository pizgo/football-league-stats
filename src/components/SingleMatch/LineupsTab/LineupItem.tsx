import React from "react";
import {
    Container,
    Paper,
    styled,
    Table,
    TableCell, TableContainer, TableHead,
    TableRow
} from "@mui/material";
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
            return <BiFootball size={20}/>
        }
        if (type === redCardsLineup) {
            return <div className="bg-red-700 w-4 h-5 rounded"/>
        }
       if (type === yellowCardsLineup) {
            return <div className="bg-yellow-500 w-4 h-5 rounded"/>
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
            <div>{playerType}</div>
            {lineups?.map((player) => (
                <div key={player.name}>
                    <p>{player.jersey_number}</p>
                    <p>{player.name}</p>
                    {player.statistics.map((el) => (
                        <p>{formattedStatistics(el)}</p>))}
                </div>
            ))}
        </div>
    )
}
export default LineupItem;