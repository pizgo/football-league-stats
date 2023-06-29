import React from "react";
import { SingleMatchSchema } from "../../types/types";
import {mobileTableHeadersContent, tableHeadersContent} from "../../utils/consts";
import { displayWhenStatusNotClosed } from "../../utils/matchesSchedulesStyle";
import {Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material";
import HeaderCell from "./HeaderCell";
import TeamCell from "./TeamCell";

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
                        <HeaderCell style="md:hidden" headerCell={mobileTableHeadersContent}/>
                        <HeaderCell style="hidden md:table-cell" headerCell={tableHeadersContent}/>
                    </TableRow>
                </TableHead>
                <TableBody>
                {matchesResults.map((singleMatch, key) => (
                    <TableRow key={singleMatch.matchID}
                        onClick={(e: React.MouseEvent) => handleOnClick(e, singleMatch)}
                        className="hover:bg-neutral-200"
                        style={(singleMatch.status === "closed") ? { cursor: "pointer" } : { cursor: "auto"}}>
                        <TeamCell style="sm:hidden"
                                  status={singleMatch.status}
                                  winnerId={singleMatch.winnerID}
                                  competitorId={singleMatch.homeCompetitor.id}
                                  content={singleMatch.homeCompetitor.abbreviation}/>
                        <TeamCell style="hidden sm:table-cell text-start"
                                  status={singleMatch.status}
                                  winnerId={singleMatch.winnerID}
                                  competitorId={singleMatch.homeCompetitor.id}
                                  content={singleMatch.homeCompetitor.name}/>
                        <TeamCell style="sm:hidden"
                                  status={singleMatch.status}
                                  winnerId={singleMatch.winnerID}
                                  competitorId={singleMatch.awayCompetitor.id}
                                  content={singleMatch.awayCompetitor.abbreviation}/>
                        <TeamCell style="hidden sm:table-cell text-start"
                                  status={singleMatch.status}
                                  winnerId={singleMatch.winnerID}
                                  competitorId={singleMatch.awayCompetitor.id}
                                  content={singleMatch.awayCompetitor.name}/>

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