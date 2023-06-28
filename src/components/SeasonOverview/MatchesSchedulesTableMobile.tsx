import React from "react";
import { SingleMatchSchema } from "../../types/types";
import { mobileTableHeadersContent } from "../../utils/consts";
import {
    teamNameColor,
    displayWhenStatusNotClosed } from "../../utils/matchesSchedulesStyle";
import Table from "react-bootstrap/Table";

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
        <>
            <Table responsive className="border-rounded" style={{fontSize: "0.9rem"}}>
                <thead>
                <tr className="bg-light">
                    {mobileTableHeadersContent.map((el, key) => (
                        <td className="p-3 fw-bold text-center" key={el}>
                            {el}
                        </td>
                    ))}
                </tr>
                </thead>
                <tbody>
                {matchesResults.map((singleMatch, key) => (
                    <tr key={singleMatch.matchID}
                        onClick={(e: React.MouseEvent) => handleOnClick(e, singleMatch)}
                        style={ (singleMatch.status === "closed") ? { cursor: "pointer" } : { cursor: "auto"}}>
                        <td className="p-3" style={teamNameColor(
                            singleMatch.status,
                            singleMatch.winnerID,
                            singleMatch.homeCompetitor.id)}>
                            {singleMatch.homeCompetitor.abbreviation}
                        </td>
                        <td className="p-3"
                            style={teamNameColor(
                                singleMatch.status,
                                singleMatch.winnerID,
                                singleMatch.awayCompetitor.id)}>
                            {singleMatch.awayCompetitor.abbreviation}
                        </td>
                        {singleMatch.status === "closed" ?
                            (<td className="p-3 d-flex justify-content-center">
                                {singleMatch.homeCompetitor.result} -{" "}
                                {singleMatch.awayCompetitor.result}
                            </td>) :
                            (<td className="p-3 d-flex justify-content-center">
                                {displayWhenStatusNotClosed(singleMatch.status)}
                            </td>)}
                        <td className="p-3">{singleMatch.matchDate}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    );
};

export default MatchesSchedulesTable;