import React from "react";
import { Table, TableHeaderCell, TableRow } from "semantic-ui-react";
import { MatchSchema } from "../types/types";
import { tableHeadersContent } from "../consts/consts";

const green = "#5aa13d";
const red = "#ba2929";
const orange = "#db611a";

interface MatchesResultsTableProps {
  matchesResults: MatchSchema[];
}

const MatchesResultsTable: React.FC<MatchesResultsTableProps> = ({
  matchesResults,
}) => {
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
          {matchesResults.map((game, key) => (
            <TableRow key={game.matchID}>
              <Table.Cell
                style={colorBackgroundSetting(
                  game.status,
                  game.winnerID,
                  game.homeCompetitor.id
                )}
              >
                {game.homeCompetitor.name}
              </Table.Cell>
              <Table.Cell
                style={colorBackgroundSetting(
                  game.status,
                  game.winnerID,
                  game.awayCompetitor.id
                )}
              >
                {game.awayCompetitor.name}
              </Table.Cell>
              <Table.Cell>
                {game.homeCompetitor.result} - {game.awayCompetitor.result}
              </Table.Cell>
              <Table.Cell>{game.matchDate}</Table.Cell>
              <Table.Cell>
                {game.homeCompetitor.halfScore} -{" "}
                {game.awayCompetitor.halfScore}
              </Table.Cell>
              <Table.Cell>{game.stadiumName}</Table.Cell>
            </TableRow>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default MatchesResultsTable;
