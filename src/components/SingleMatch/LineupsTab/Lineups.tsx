import React, {useState} from "react";
import {
    Paper,
    styled,
    Table,
    TableCell, TableContainer, TableHead,
    TableRow
} from "@mui/material";
import {
    LineupsPlayersStatistics,
    LineupsSchema,
    PlayersStatisticsSchema,
    SingleMatchSchema
} from "../../../types/types";
import TeamLineup from "./TeamLineup";

interface StatisticsProps {
    chosenMatch: SingleMatchSchema
    lineupsPlayersStatistics: LineupsPlayersStatistics
}

const Lineups: React.FC<StatisticsProps> = ({chosenMatch, lineupsPlayersStatistics}) => {

    const [lineupHomeToggle, setLineupHomeToggle] = useState(true)
    const [lineupAwayToggle, setLineupAwayToggle] = useState(false)

    const handleLineupHomeToggle = () => {
        setLineupHomeToggle(true)
        setLineupAwayToggle(false)
    }

    const handleLineupAwayToggle = () => {
        setLineupHomeToggle(false)
        setLineupAwayToggle(true)
    }

    return (
        <div className="flex justify-center">
            <div>
                <button onClick={handleLineupHomeToggle}>{chosenMatch.homeCompetitor.name}</button>
                <button onClick={handleLineupAwayToggle}>{chosenMatch.awayCompetitor.name}</button>
            </div>
            {lineupHomeToggle && <TeamLineup qualifier='home'/>}
            {lineupAwayToggle && <TeamLineup qualifier='away'/>}

        </div>

    )
}
export default Lineups;