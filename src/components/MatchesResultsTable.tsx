import React from "react";
import { Icon, Label, Menu, Table, Button } from "semantic-ui-react";
import { MatchesDetails } from "../types/types";

interface MatchesResultsTableProps {
  matchesResults: MatchesDetails[];
}

const MatchesResultsTable: React.FC<MatchesResultsTableProps> = ({}) => {
  return (
    <>
      <Table celled>
        <Table.Header>
          <Table.HeaderCell>Team names</Table.HeaderCell>
          <Table.HeaderCell>Match Result</Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>name name</Table.Cell>
            <Table.Cell>3:0</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};

export default MatchesResultsTable;
