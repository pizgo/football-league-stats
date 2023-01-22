import React from "react";
import { Table, TableHeaderCell, TableRow } from "semantic-ui-react";
import { MatchDetails } from "../types/types";
import { tableHeadersContent } from "../consts/consts";

interface MatchesResultsTableProps {
  matchesResults: MatchDetails[];
}

const MatchesResultsTable: React.FC<MatchesResultsTableProps> = ({
  matchesResults,
}) => {
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
              <Table.Cell>{game.homeCompetitor.name}</Table.Cell>
              <Table.Cell>{game.awayCompetitor.name}</Table.Cell>
              <Table.Cell>
                {game.homeCompetitor.result} - {game.awayCompetitor.result}
              </Table.Cell>
              <Table.Cell>{game.matchDate}</Table.Cell>
              <Table.Cell> </Table.Cell>
              <Table.Cell>{game.stadiumName}</Table.Cell>
            </TableRow>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default MatchesResultsTable;
