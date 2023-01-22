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
        {/*<Table.Body>*/}
        {/*  {matchesResults.map((game, key) => (*/}
        {/*    <TableRow key={game.matchID}>*/}
        {/*      <Table.Cell>{game.firstCompetitorName}</Table.Cell>*/}
        {/*      <Table.Cell>{game.secondCompetitorName}</Table.Cell>*/}
        {/*      <Table.Cell>{game.stadiumName}</Table.Cell>*/}
        {/*      <Table.Cell>{game.matchDate}</Table.Cell>*/}
        {/*      <Table.Cell>*/}
        {/*        {game.awayScore} - {game.homeScore}*/}
        {/*      </Table.Cell>*/}
        {/*    </TableRow>*/}
        {/*  ))}*/}
        {/*</Table.Body>*/}
      </Table>
    </>
  );
};

export default MatchesResultsTable;
