import React from "react";
import {
    styled,
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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: "#DFE3FA",
    },
}));

const Statistics: React.FC<StatisticsProps> = ({statistics}) => {

    const checkWhoWon = (thisResult: number, resultToCompare: number) => {
        if (thisResult > resultToCompare) {
            return "font-bold"
        }
    }

    return (
        <Table>
            <tbody>
            {Object.keys(statistics).map((el, key) => (
                <StyledTableRow>
                    <TableCell className={`text-center ${checkWhoWon(statistics[el].home, statistics[el].away)}`}>{statistics[el].home ? statistics[el].home : '0'}</TableCell>
                    <TableCell className="text-center">{changeStatsNameFormat(el)}</TableCell>
                    <TableCell className={`text-center ${checkWhoWon(statistics[el].away, statistics[el].home)}`}>{statistics[el].away ? statistics[el].away : '0'}</TableCell>
                </StyledTableRow>
            ))}
            </tbody>
        </Table>
    )
}
export default Statistics;