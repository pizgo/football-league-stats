import React from "react";
import { SingleMatchSchema } from "../../types/types";
import { mobileHeadersContent, desktopHeadersContent, tabletHeadersContent } from "../../utils/consts";
import { displayWhenStatusNotClosed } from "../../utils/matchesSchedulesStyle";
import { Paper,
        TableContainer,
        Table,
        TableHead,
        TableRow,
        TableCell,
        TableBody } from "@mui/material";
import HeaderCell from "./HeaderCell";
import TeamCell from "./TeamCell";

interface MatchesResultsTableProps {
    matchesResults: SingleMatchSchema[];
    onChooseMatch: (singleMatch: SingleMatchSchema) => void;
}

const Timetable: React.FC<MatchesResultsTableProps> = ({ matchesResults, onChooseMatch}) => {

    const handleOnClick = ( e: React.MouseEvent, clickedMatch: SingleMatchSchema) => {
        if(clickedMatch.status === "closed") {
            onChooseMatch(clickedMatch);
        }
    };

    return (
        <TableContainer component={Paper} className="h-60screen">
            <Table stickyHeader>
                <TableHead className="mt-10">
                    <TableRow className="bg-primary-200">
                        <HeaderCell style="sm:hidden" headerCell={mobileHeadersContent}/>
                        <HeaderCell style="hidden sm:table-cell lg:hidden" headerCell={tabletHeadersContent}/>
                        <HeaderCell style="hidden lg:table-cell text-base" headerCell={desktopHeadersContent}/>
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
                        <TeamCell style="hidden sm:table-cell px-3 text-start"
                                  status={singleMatch.status}
                                  winnerId={singleMatch.winnerID}
                                  competitorId={singleMatch.homeCompetitor.id}
                                  content={singleMatch.homeCompetitor.name}/>
                        <TeamCell style="sm:hidden"
                                  status={singleMatch.status}
                                  winnerId={singleMatch.winnerID}
                                  competitorId={singleMatch.awayCompetitor.id}
                                  content={singleMatch.awayCompetitor.abbreviation}/>
                        <TeamCell style="hidden sm:table-cell px-3 text-start"
                                  status={singleMatch.status}
                                  winnerId={singleMatch.winnerID}
                                  competitorId={singleMatch.awayCompetitor.id}
                                  content={singleMatch.awayCompetitor.name}/>
                        {singleMatch.status === "closed" ?
                            (<TableCell className="flex justify-center">
                                {singleMatch.homeCompetitor.result} -{" "}
                                {singleMatch.awayCompetitor.result}
                            </TableCell>) :
                            (<TableCell className="flex justify-center">
                                {displayWhenStatusNotClosed(singleMatch.status)}
                            </TableCell>)}
                        <TableCell className="px-2">{singleMatch.matchDate}</TableCell>
                        <TableCell className="hidden lg:table-cell text-start px-3">{singleMatch.stadiumName}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Timetable;