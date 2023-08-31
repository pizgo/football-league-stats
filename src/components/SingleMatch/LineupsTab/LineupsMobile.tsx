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
import TeamLineupMobile from "./TeamLineupMobile";
import LineupsDesktop from "./LineupsDesktop";

interface LineupsMobile {
    chosenMatch: SingleMatchSchema
    lineups: LineupsPlayersStatistics
}

const LineupsMobile: React.FC<LineupsMobile> = ({chosenMatch, lineups}) => {

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

    console.log(lineups)

    return (
        <>
            <div className="sm:hidden">
                <div className="flex justify-around px-3 pt-4 pb-6">
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
                {lineupHomeToggle && <TeamLineupMobile chosenMatch={chosenMatch} lineups={lineups.home} competitorType='home'/>}
                {lineupAwayToggle && <TeamLineupMobile chosenMatch={chosenMatch} lineups={lineups.away} competitorType='away'/>}
            </div>
        </>
    )
}
export default LineupsMobile;