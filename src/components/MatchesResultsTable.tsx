import React from "react";
import { Table, TableHeaderCell, TableRow } from "semantic-ui-react";
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

interface MatchesResultsTableProps {
  matchesResults: SingleMatchSchema[];
  onChooseMatch: (singleMatch: SingleMatchSchema) => void;
}

const MatchesResultsTable: React.FC<MatchesResultsTableProps> = ({
  matchesResults,
  onChooseMatch,
}) => {
  const handleOnClick = (
    e: React.MouseEvent,
    clickedMatch: SingleMatchSchema
  ) => {
    onChooseMatch(clickedMatch);
  };

  return (
    <>
      <Table celled>
        <Table.Header>
          <TableRow>
            {tableHeadersContent.map((el, key) => (
              <TableHeaderCell key={el}>{el}</TableHeaderCell>
            ))}
          </TableRow>
        </Table.Header>
        <Table.Body>
          {matchesResults.map((singleMatch, key) => (
            <TableRow
              key={singleMatch.matchID}
              onClick={(e: React.MouseEvent) => handleOnClick(e, singleMatch)}
            >
              <Table.Cell
                style={colorBackgroundSetting(
                  singleMatch.status,
                  singleMatch.winnerID,
                  singleMatch.homeCompetitor.id
                )}
              >
                {singleMatch.homeCompetitor.name}
              </Table.Cell>
              <Table.Cell
                style={colorBackgroundSetting(
                  singleMatch.status,
                  singleMatch.winnerID,
                  singleMatch.awayCompetitor.id
                )}
              >
                {singleMatch.awayCompetitor.name}
              </Table.Cell>
              <Table.Cell>
                {singleMatch.homeCompetitor.result} -{" "}
                {singleMatch.awayCompetitor.result}
              </Table.Cell>
              <Table.Cell>{singleMatch.matchDate}</Table.Cell>
              <Table.Cell>
                {singleMatch.homeCompetitor.halfScore} -{" "}
                {singleMatch.awayCompetitor.halfScore}
              </Table.Cell>
              <Table.Cell>{singleMatch.stadiumName}</Table.Cell>
            </TableRow>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default MatchesResultsTable;
