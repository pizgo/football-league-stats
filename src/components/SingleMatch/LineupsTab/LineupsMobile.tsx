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
    LineupsSchema,
    PlayersStatisticsSchema,
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
                <div className="flex justify-around p-3">
                    <Box component={Paper} role="button"
                         className="p-3 font-bold w-2/5 pointer text-center hover:bg-neutral-200 active:bg-neutral-200"
                         onClick={handleLineupHomeToggle}>
                         Home Team
                    </Box>
                    <Box component={Paper} role="button"
                         className="p-3 font-bold w-2/5 pointer text-center hover:bg-neutral-200 active:bg-neutral-200"
                         onClick={handleLineupAwayToggle}>
                        Away Team
                    </Box>
                </div>
                {lineupHomeToggle && <TeamLineup qualifier='home'/>}
                {lineupAwayToggle && <TeamLineup qualifier='away'/>}
        </div>

    )
}
export default LineupsMobile;