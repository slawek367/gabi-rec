import { useState, MouseEvent } from 'react';
import Box from '@mui/material/Box';
import { default as MuiTable } from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { render } from 'react-dom';

export interface HeadCell<DataType> {
  id: keyof DataType;
  label: string;
  render?: (data: DataType) => JSX.Element | string | number;
}

export type HeadCellConfig<DataType> = HeadCell<DataType>[];

interface DataBase {
  objectID: number;
}

interface TableProps<DataType extends DataBase> {
  rows: DataType[];
  cellsConfig: HeadCellConfig<DataType>;
  rowsPerPage?: number;
}

export const Table = <DataType extends DataBase>({
  rows,
  cellsConfig,
  rowsPerPage = 10,
}: TableProps<DataType>) => {
  const [page, setPage] = useState(0);

  const handleChangePage = (
    _: MouseEvent<HTMLButtonElement, globalThis.MouseEvent> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const emptyRows = rowsPerPage * (1 + page) - rows.length;

  const renderCells = (row: DataType) => {
    return cellsConfig.map((cell, idx) => {
      if (cell.render) {
        return <TableCell key={idx}>{cell.render(row)}</TableCell>;
      }
      return <TableCell key={idx}>{row[cell.id] || '-'}</TableCell>;
    });
  };

  return (
    <Box>
      <Paper>
        <TableContainer>
          <MuiTable size={'medium'}>
            <TableHead>
              <TableRow>
                {cellsConfig.map((headCell, idx) => (
                  <TableCell key={idx}>{headCell.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      onClick={(event: MouseEvent<unknown>) =>
                        console.log(event, row.objectID)
                      }
                      role="checkbox"
                      tabIndex={-1}
                      key={index}
                    >
                      {renderCells(row)}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  sx={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={12} />
                </TableRow>
              )}
            </TableBody>
          </MuiTable>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[rowsPerPage]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
        />
      </Paper>
    </Box>
  );
};
