import React from "react";
import { SingleMatchSchema } from "../../../types/types";
import { tableHeadersContent } from "../../../consts/consts";
import {
  colorBackgroundSetting,
  displayWhenStatusNotClosed } from "./style";
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
      <Table responsive hover className="border-rounded">
        <thead>
          <tr className="bg-light">
            {tableHeadersContent.map((el, key) => (
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
              <td className="p-3" style={colorBackgroundSetting(
                  singleMatch.status,
                  singleMatch.winnerID,
                  singleMatch.homeCompetitor.id)}>
                {singleMatch.homeCompetitor.name}
              </td>
              <td className="p-3"
                style={colorBackgroundSetting(
                  singleMatch.status,
                  singleMatch.winnerID,
                  singleMatch.awayCompetitor.id)}>
                {singleMatch.awayCompetitor.name}
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
              <td className="p-3 d-flex justify-content-center">
                {singleMatch.homeCompetitor.halfScore} -{" "}
                {singleMatch.awayCompetitor.halfScore}
              </td>
              <td className="p-3">{singleMatch.stadiumName}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default MatchesSchedulesTable;
