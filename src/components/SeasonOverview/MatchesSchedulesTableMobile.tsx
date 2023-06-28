import React from "react";
import { SingleMatchSchema } from "../../types/types";
import { mobileTableHeadersContent } from "../../utils/consts";
import { teamNameColor, displayWhenStatusNotClosed } from "../../utils/matchesSchedulesStyle";
import {Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material";

interface MatchesResultsTableProps {
    matchesResults: SingleMatchSchema[];
    onChooseMatch: (singleMatch: SingleMatchSchema) => void;
}

const MatchesSchedulesTable: React.FC<MatchesResultsTableProps> = ({ matchesResults, onChooseMatch}) => {

    const handleOnClick = ( e: React.MouseEvent, clickedMatch: SingleMatchSchema) => {
        if(clickedMatch.status === "closed") {
            onChooseMatch(clickedMatch);
        }
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow className="bg-primary-200">
                        {mobileTableHeadersContent.map((el, key) => (
                            <TableCell className="font-bold text-white text-center" key={el}>
                                {el}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                {matchesResults.map((singleMatch, key) => (
                    <TableRow key={singleMatch.matchID}
                        onClick={(e: React.MouseEvent) => handleOnClick(e, singleMatch)}
                        style={ (singleMatch.status === "closed") ? { cursor: "pointer" } : { cursor: "auto"}}>
                        <TableCell className="" style={teamNameColor(
                            singleMatch.status,
                            singleMatch.winnerID,
                            singleMatch.homeCompetitor.id)}>
                            {singleMatch.homeCompetitor.abbreviation}
                        </TableCell>
                        <TableCell className=""
                            style={teamNameColor(
                                singleMatch.status,
                                singleMatch.winnerID,
                                singleMatch.awayCompetitor.id)}>
                            {singleMatch.awayCompetitor.abbreviation}
                        </TableCell>
                        {singleMatch.status === "closed" ?
                            (<TableCell className="d-flex justify-content-center">
                                {singleMatch.homeCompetitor.result} -{" "}
                                {singleMatch.awayCompetitor.result}
                            </TableCell>) :
                            (<TableCell className="d-flex justify-content-center">
                                {displayWhenStatusNotClosed(singleMatch.status)}
                            </TableCell>)}
                        <TableCell className="">{singleMatch.matchDate}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MatchesSchedulesTable;