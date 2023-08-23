import React from "react";
import {
    Paper,
    styled,
    Table,
    TableCell, TableContainer,
    TableRow
} from "@mui/material";
import { StatisticsSchema } from "../../../types/types";
import TeamStatistics from "./TeamStatistics";
import {changeStatsNameFormat} from "../../../utils/changeStatsNameFormat";

interface StatisticsProps {
    statistics: StatisticsSchema
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: "#DFE3FA",
    },
    '&:nth-of-type(odd)': {
        backgroundColor: "#F8F8FB",
    },
}));

const Statistics: React.FC<StatisticsProps> = ({statistics}) => {

    const checkWhoWon = (thisResult: number, resultToCompare: number) => {
        if (thisResult > resultToCompare) {
            return "font-bold"
        }
    }

    return (
        <div className="flex justify-center">
            <TableContainer component={Paper} className="sm:w-4/5">
                <Table>
                    <tbody>
                    {Object.keys(statistics).map((el, key) => (
                        <StyledTableRow>
                            <TableCell className={`text-center px-0 sm:px-3 py-3 ${checkWhoWon(statistics[el].home, statistics[el].away)}`}>{statistics[el].home ? statistics[el].home : '0'}</TableCell>
                            <TableCell className="text-center px-0 sm:px-3 py-3 w-2/5">{changeStatsNameFormat(el)}</TableCell>
                            <TableCell className={`text-center px-0 sm:px-3 py-3 ${checkWhoWon(statistics[el].away, statistics[el].home)}`}>{statistics[el].away ? statistics[el].away : '0'}</TableCell>
                        </StyledTableRow>
                    ))}
                    </tbody>
                </Table>
            </TableContainer>
        </div>


    )
}
export default Statistics;