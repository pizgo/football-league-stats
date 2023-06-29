import React from "react";
import { SingleMatchSchema } from "../../types/types";
import {mobileTableHeadersContent, tableHeadersContent} from "../../utils/consts";
import { teamNameColor, displayWhenStatusNotClosed } from "../../utils/matchesSchedulesStyle";
import {Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material";
import HeaderCell from "./HeaderCell";

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
        <TableContainer component={Paper} className="h-halfScreen">
            <Table stickyHeader>
                <TableHead className="mt-10">
                    <TableRow className="bg-primary-200">
                        <HeaderCell style="sm:hidden" headerCell={mobileTableHeadersContent}/>
                        <HeaderCell style="hidden sm:table-cell" headerCell={tableHeadersContent}/>
                    </TableRow>
                </TableHead>
                <TableBody>
                {matchesResults.map((singleMatch, key) => (
                    <TableRow key={singleMatch.matchID}
                        onClick={(e: React.MouseEvent) => handleOnClick(e, singleMatch)}
                        className="hover:bg-neutral-200"
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