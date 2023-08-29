import React, {useState} from "react";
import {
    Box,
    Button,
    Paper,
    styled,
    Table,
    TableCell, TableContainer, TableHead,
    TableRow
} from "@mui/material";
import {
    LineupsPlayersStatistics,
    SingleMatchSchema
} from "../../../types/types";
import TeamLineup from "./TeamLineup";

interface StatisticsProps {
    chosenMatch: SingleMatchSchema
    lineupsPlayersStatistics: LineupsPlayersStatistics
}

const LineupsMobile: React.FC<StatisticsProps> = ({chosenMatch, lineupsPlayersStatistics}) => {

    const [lineupHomeToggle, setLineupHomeToggle] = useState(true)
    const [lineupAwayToggle, setLineupAwayToggle] = useState(false)

    console.log(lineupsPlayersStatistics)

    const handleLineupHomeToggle = () => {
        setLineupHomeToggle(true)
        setLineupAwayToggle(false)
    }
    const handleLineupAwayToggle = () => {
        setLineupHomeToggle(false)
        setLineupAwayToggle(true)
    }

    return (
        <div className="sm:hidden">
                <div className="flex justify-around px-3 py-4">
                    <button role="button"
                         className="py-3 px-4 font-bold text-center shadow-md hover:bg-neutral-200 active:bg-neutral-200 rounded border"
                         onClick={handleLineupHomeToggle}>
                        {chosenMatch.homeCompetitor.abbreviation}
                    </button>
                    <button role="button"
                         className="py-3 px-4 font-bold text-center shadow-md hover:bg-neutral-200 active:bg-neutral-200 rounded border"
                         onClick={handleLineupAwayToggle}>
                        {chosenMatch.awayCompetitor.abbreviation}
                    </button>
                </div>
                {lineupHomeToggle && <TeamLineup qualifier='home'/>}
                {lineupAwayToggle && <TeamLineup qualifier='away'/>}
        </div>

    )
}
export default LineupsMobile;