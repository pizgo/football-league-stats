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
    lineups: LineupsPlayersStatistics
}

const LineupsDesktop: React.FC<StatisticsProps> = ({chosenMatch, lineups}) => {

    return (
        <div className="hidden sm:flex flex-row">
            <TeamLineup chosenMatch={chosenMatch} lineups={lineups.home} competitorType='home'/>
            <TeamLineup chosenMatch={chosenMatch} lineups={lineups.away} competitorType='away'/>
        </div>

    )
}
export default LineupsDesktop;