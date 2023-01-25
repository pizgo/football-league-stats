import React from "react";
import Table from "react-bootstrap/Table"
import { SingleMatchSchema } from "../types/types";
import { tableHeadersContent } from "../consts/consts";

const green = "#5aa13d";
const red = "#ba2929";
const orange = "#db611a";
const colorBackgroundSetting = (
  gameStatus: string,
  winnerId: string | undefined,
  competitorId: string
): {} => {
  if (gameStatus !== "closed") {
    return { backgroundColor: "none" };
  } else if (!winnerId) {
    return { backgroundColor: orange };
  } else if (winnerId && winnerId === competitorId) {
    return { backgroundColor: green };
  } else {
    return { backgroundColor: red };
  }
};

const displayWhenStatusNotClosed = (gameStatus: string) => {
  if (gameStatus == "postponed") {
    return "game postponed"
  } else if (gameStatus === "delayed") {
    return "game delayed"
  } else if (gameStatus === "not_started") {
    return "not started"
  }
}

interface MatchesResultsTableProps {
  matchesResults: SingleMatchSchema[];
  onChooseMatch: (singleMatch: SingleMatchSchema) => void;
}

const MatchesSchedulesTable: React.FC<MatchesResultsTableProps> =
    ({ matchesResults, onChooseMatch,}) => {
  const handleOnClick = (e: React.MouseEvent, clickedMatch: SingleMatchSchema) => {
    onChooseMatch(clickedMatch);
  };

  return (
    <>
      <Table responsive bordered={true} className="border-rounded">
        <thead>
          <tr className="bg-light">
            {tableHeadersContent.map((el, key) => (
              <td className="p-3 fw-bold" key={el}>{el}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {matchesResults.map((singleMatch, key) => (
            <tr
              key={singleMatch.matchID}
              onClick={(e: React.MouseEvent) => handleOnClick(e, singleMatch)}
              style={{cursor: "pointer"}}
            >
              <td className="p-3"
                style={colorBackgroundSetting(
                  singleMatch.status,
                  singleMatch.winnerID,
                  singleMatch.homeCompetitor.id
                )}
              >
                {singleMatch.homeCompetitor.name}
              </td>
              <td className="p-3"
                style={colorBackgroundSetting(
                  singleMatch.status,
                  singleMatch.winnerID,
                  singleMatch.awayCompetitor.id
                )}
              >
                {singleMatch.awayCompetitor.name}
              </td>
                {(singleMatch.status === "closed") ? <td className="p-3 d-flex justify-content-center">{singleMatch.homeCompetitor.result} -{" "}
                  {singleMatch.awayCompetitor.result}</td> : <td className="p-3 d-flex justify-content-center">{displayWhenStatusNotClosed(singleMatch.status)}</td>}

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
