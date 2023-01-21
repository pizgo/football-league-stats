import React from "react";
import { Table, TableRow } from "semantic-ui-react";
import { MatchDetails } from "../types/types";

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
            <Table.HeaderCell>Team names</Table.HeaderCell>
            <Table.HeaderCell>Match Result</Table.HeaderCell>
          </TableRow>
        </Table.Header>
        <Table.Body>
          {matchesResults.map((game, key) => (
            <TableRow key={game.id}>
              <Table.Cell>
                {game.competitorName1}, {game.competitorName2}
              </Table.Cell>
              <Table.Cell>
                {game.away_score} - {game.home_score}
              </Table.Cell>
            </TableRow>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default MatchesResultsTable;
