import React from "react";
import {
    Table,
    TableCell,
    TableRow
} from "@mui/material";
import { StatisticsSchema } from "../../../types/types";
import TeamStatistics from "./TeamStatistics";
import {changeStatsNameFormat} from "../../../utils/changeStatsNameFormat";

interface StatisticsProps {
    statistics: StatisticsSchema
}

const Statistics: React.FC<StatisticsProps> = ({statistics}) => {

    return (
        <Table>
            <tbody>
            {Object.keys(statistics).map((el, key) => (
                <TableRow>
                    <TableCell>{statistics[el].home}</TableCell>
                    <TableCell>{changeStatsNameFormat(el)}</TableCell>
                    <TableCell>{statistics[el].away}</TableCell>
                </TableRow>
            ))}
            </tbody>
        </Table>
    )
}
export default Statistics;