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
import LineupItem from "./LineupItem";

interface StatisticsProps {
    competitorType: string
    chosenMatch: SingleMatchSchema
    lineups?: PlayerStatistics[]
}

const TeamLineup: React.FC<StatisticsProps> = ({ competitorType, chosenMatch, lineups}) => {

    const goalkeeper = lineups?.filter((player) => (player.type === "goalkeeper") && player.starter)
    const defenders = lineups?.filter((player) => (player.type === "defender") && player.starter)
    const midfielders = lineups?.filter((player) => (player.type === "midfielder") && player.starter)
    const forwards = lineups?.filter((player) => (player.type === "forward") && player.starter)
    const substitutes = lineups?.filter((player) => !player.starter)

    return (
        <Container className="grid grid-cols-12 overflow-scroll h-60screen">
            <div className="col-span-12">
                {competitorType === 'home' ?
                    <h1 className="text-base text-center font-bold py-3">{chosenMatch.homeCompetitor.name}</h1> :
                    <h1 className="text-base text center font-bold py-3">{chosenMatch.awayCompetitor.name}</h1>}
            </div>
            <div className="col-span-12">
                <LineupItem playerType="Goalkeeper"  lineups={goalkeeper}/>
                <LineupItem playerType="Defenders"  lineups={defenders}/>
                <LineupItem playerType="Midfielders"  lineups={midfielders}/>
                <LineupItem playerType="Forwards" lineups={forwards}/>
                <LineupItem playerType="Substitutes" lineups={substitutes}/>
            </div>
        </Container>

    )
}
export default TeamLineup;