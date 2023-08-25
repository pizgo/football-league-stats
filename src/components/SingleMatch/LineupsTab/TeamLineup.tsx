import React from "react";
import {
    Paper,
    styled,
    Table,
    TableCell, TableContainer, TableHead,
    TableRow
} from "@mui/material";
import {LineupsSchema, PlayersStatisticsSchema, SingleMatchSchema} from "../../../types/types";
import {changeStatsNameFormat} from "../../../utils/changeStatsNameFormat";

interface StatisticsProps {
    qualifier: string
    // playersStatistics: PlayersStatisticsSchema[]
    // lineups: LineupsSchema[]

}

const TeamLineup: React.FC<StatisticsProps> = ({ qualifier}) => {

    return (
        <div className="flex justify-center">
            <div>
                {qualifier}
            </div>

        </div>

    )
}
export default TeamLineup;