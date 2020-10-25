import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import TableSortLabel from "@material-ui/core/TableSortLabel";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    Height: "100%",
  },
});

function createData(name: string, description: string) {
  return { name, description };
}

const rows = [
  createData("Real Madrid", "Real Madrid Squad"),
  createData("Barcelona", "Barcelona Squad"),
  createData("Liverpool", "Liverpool Squad"),
  createData("Lazio", "Lazio Squad"),
];

export default function TeamTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                Name
                <TableSortLabel direction="asc" />
              </TableCell>
              <TableCell align="right">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
