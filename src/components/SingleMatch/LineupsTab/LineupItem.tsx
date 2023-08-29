import React from "react";
import {
    Container,
    Paper,
    styled,
    Table,
    TableCell, TableContainer, TableHead,
    TableRow
} from "@mui/material";
import {
    LineupsPlayersStatistics,
    LineupsSchema,
    PlayersStatisticsSchema, PlayerStatistics,
    SingleMatchSchema
} from "../../../types/types";
import {changeStatsNameFormat} from "../../../utils/changeStatsNameFormat";
import {
    assist, goalsScored,
    redCard, redCards,
    scoreChange,
    scorer,
    substitutedIn,
    substitutedOut,
    substitution,
    yellowCard
} from "../../../utils/consts";
import {BiFootball} from "react-icons/bi";

interface StatisticsProps {
    playerType: string,
    lineups?: PlayerStatistics[]
}

const LineupItem: React.FC<StatisticsProps> = ({ playerType, lineups}) => {
    const formattedStatistics =  (type:string)  => {
        if (type === goalsScored) {
            return <BiFootball size={20}/>
        }
        if (type === redCards) {
            return (
                <div>
                    <span className="text-winner text-base md:text-lg">&#8593;</span>
                    <span className="text-lost text-base md:text-lg">&#8595;</span>
                </div>
            )
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
    return (
        <div className="col-span-12">
            <div>{playerType}</div>
            {lineups?.map((player) => (
                <div key={player.name}>
                    <p>{player.jersey_number}</p>
                    <p>{player.name}</p>
                    {player.statistics.map((el) => (
                        <p>{el}</p>))}
                </div>
            ))}
        </div>
    )
}
export default LineupItem;