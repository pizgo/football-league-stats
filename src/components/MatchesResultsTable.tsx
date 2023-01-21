import React from "react";
import { Icon, Label, Menu, Table, Button, TableRow } from "semantic-ui-react";
import { MatchesDetails } from "../types/types";

interface MatchesResultsTableProps {
  matchesResults: MatchesDetails[] | MatchesDetails;
}

const MatchesResultsTable: React.FC<MatchesResultsTableProps> = ({
  matchesResults,
}) => {
  return (
    <>
      <Table celled>
        <Table.Header>
          <Table.HeaderCell>Team names</Table.HeaderCell>
          <Table.HeaderCell>Match Result</Table.HeaderCell>
        </Table.Header>
        {/*<Table.Body>*/}
        {/*  {matchesResults.map((game, key) => (*/}
        {/*      <TableRow key = {matchesResults.id}>*/}
        {/*        <Table.Cell>{matchesResults.competitorName1}, {matchesResults.competitorName2}</Table.Cell>*/}
        {/*      </TableRow>*/}
        {/*  ))}*/}
        {/*    <Table.Cell>3:0</Table.Cell>*/}
        {/*  </Table.Row>*/}
        {/*</Table.Body>*/}
      </Table>
    </>
  );
};

export default MatchesResultsTable;
