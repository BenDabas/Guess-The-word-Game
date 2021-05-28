import React from 'react';
import { useSelector } from 'react-redux';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './scoreTablePage.css';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const ScoreTablePage = () => {
  const classes = useStyles();

  const { users } = useSelector((state) => state);

  return (
    <div className="score-table-page-wrapper">
      <h1>Table Scores </h1>
      <div className="score-table">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell style={{ width: '10%' }}>
                  Username
                </StyledTableCell>
                <StyledTableCell align="right" style={{ width: '10%' }}>
                  User phone
                </StyledTableCell>
                <StyledTableCell align="right" style={{ width: '10%' }}>
                  Max score
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    style={{ width: '20%' }}
                  >
                    {user.userName}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {user.userPhone}
                  </StyledTableCell>
                  <StyledTableCell align="right" style={{ width: '10%' }}>
                    {user.userMaxScore}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ScoreTablePage;
