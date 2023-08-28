import React from "react";
import {
    Paper,
    styled,
    Table,
    TableCell, TableContainer, TableHead,
    TableRow
} from "@mui/material";
import {SingleMatchSchema, StatisticsSchema} from "../../../types/types";
import {changeStatsNameFormat} from "../../../utils/changeStatsNameFormat";

interface StatisticsProps {
    chosenMatch: SingleMatchSchema
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

const Statistics: React.FC<StatisticsProps> = ({chosenMatch, statistics}) => {

    const checkWhoWon = (thisResult: number, resultToCompare: number) => {
        if (thisResult > resultToCompare) {
            return "font-bold"
        }
    }

    return (
        <div className="flex justify-center">
            <TableContainer component={Paper} className="h-60screen sm:w-4/5">
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell className="text-center font-bold w-1/3">{chosenMatch.homeCompetitor.name}</TableCell>
                            <TableCell>&nbsp;</TableCell>
                            <TableCell className="text-center font-bold w-1/3">{chosenMatch.awayCompetitor.name}</TableCell>
                        </TableRow>
                    </TableHead>
                    <tbody>
                    {Object.keys(statistics).map((el, index) => (
                        <StyledTableRow key={index}>
                            <TableCell className={`text-center px-0 sm:px-3 py-3 ${checkWhoWon(statistics[el].home, statistics[el].away)}`}>{statistics[el].home ? statistics[el].home : '0'}</TableCell>
                            <TableCell className="text-center px-0 sm:px-3 py-3">{changeStatsNameFormat(el)}</TableCell>
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