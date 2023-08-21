import React from "react";
import {TableCell} from "@mui/material";
import {StatisticsSchema} from "../../../types/types";


interface TeamStatisticsProps {
    statistics: StatisticsSchema
}

const TeamStatistics: React.FC<TeamStatisticsProps> = ({statistics}) => {

    return (
        <TableCell></TableCell>
    )
}
export default TeamStatistics
;