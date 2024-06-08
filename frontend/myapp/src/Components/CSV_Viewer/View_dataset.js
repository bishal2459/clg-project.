import Viewer from "./Viewer";
import React, { useState } from "react";
import { useTable, usePagination } from "react-table";
import "bootstrap/dist/css/bootstrap.min.css";
import Papa from "papaparse";
import { useLocation, useNavigate } from "react-router-dom";




import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  makeStyles,
  styled,
} from "@mui/material";


const TableStyling=styled(TableCell)({
    fontSize:"22px",
    fontWeight:"bold"

})

const View_dataset = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [data, setData] = useState([]);
  // const [columns, setColumns] = useState([]);

  // const handleSubmit = (e) => {
  //       const file = e.target.files[0];
  //   if (file) {
  //         Papa.parse(file, {
  //        complete: (result) => {
  //         const parsedData = result.data;
  //         setColumns(parsedData[0]);
  //         setData(parsedData.slice(1));
  //       }
  //     });
  //   }
  // };

  const DiabetesDetails = ({ data }) => {
    const columns = React.useMemo(
      () => [
        { Header: "Sr. No.", accessor: "srNo" },
        { Header: "Pregnancies", accessor: "pregnancies" },
        { Header: "Glucose", accessor: "glucose" },
        { Header: "BloodPressure", accessor: "bloodPressure" },
        { Header: "SkinThickness", accessor: "skinThickness" },
        { Header: "Insulin", accessor: "insulin" },
        { Header: "BMI", accessor: "bmi" },
        {
          Header: "DiabetesPedigreeFunction",
          accessor: "diabetesPedigreeFunction",
        },
        { Header: "Age", accessor: "age" },
        { Header: "Outcome", accessor: "outcome" },
      ],
      []
    );

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    //   const useStyles = makeStyles({
    //     table: {
    //       minWidth: 650,
    //       background: "black",
    //     },
    //   });

    //   const {
    //     getTableProps,
    //     getTableBodyProps,
    //     headerGroups,
    //     page,
    //     nextPage,
    //     previousPage,
    //     canNextPage,
    //     canPreviousPage,
    //     pageOptions,
    //     state: { pageIndex },
    //     prepareRow,
    //   } = useTable(
    //     { columns, data, initialState: { pageIndex: 0 }, pageSize: 10 },
    //     usePagination
    // );

    // const classes = useStyles();
    return (
      <div
        style={{ width: "100%", paddingInline: "100px", marginTop: "150px" }}
      >
        <h2
          style={{
            backgroundColor: "#003366",
            color: "white",
            textalign: "center",
            padding:"20px"
          }}
        >
          Diabetes Dataset Details
        </h2>
        <TableContainer component={Paper} sx={{ mt: 1 , fontSize: "100px"}}>
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: "grey" }}>
                <TableStyling>Sr. No</TableStyling>
                <TableStyling align="right" >Pregnancies</TableStyling>
                <TableStyling align="right">Glucose</TableStyling>
                <TableStyling align="right">BloodPressure</TableStyling>
                <TableStyling align="right">SkinThickness</TableStyling>
                <TableStyling align="right">Insulin</TableStyling>
                <TableStyling align="right">BMI</TableStyling>
                <TableStyling align="right">DiabetesPedigreeFunction</TableStyling>
                <TableStyling align="right">Age</TableStyling>
                <TableStyling align="right">Outcome</TableStyling>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, i) => (
                  <TableRow key={i}>
                    <TableCell component="th" scope="row">
                      {i + 1 + page * rowsPerPage}
                    </TableCell>
                    <TableCell align="right"  style={{ textAlign:'center'}}>{row.Pregnancies}</TableCell>
                    <TableCell align="right"  style={{ textAlign:'center'}}>{row.Glucose}</TableCell>
                    <TableCell align="right"  style={{ textAlign:'center'}}>{row.BloodPressure}</TableCell>
                    <TableCell align="right"  style={{ textAlign:'center'}}>{row.SkinThickness}</TableCell>
                    <TableCell align="right"  style={{ textAlign:'center'}}>{row.Insulin}</TableCell>
                    <TableCell align="right"  style={{ textAlign:'center'}}>{row.BMI}</TableCell>
                    <TableCell align="right"  style={{ textAlign:'center'}}>
                      {row.DiabetesPedigreeFunction}
                    </TableCell>
                    <TableCell align="right">{row.Age}</TableCell>
                    <TableCell align="right">{Object.values(row)[8]}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div style={{ width: "100%"  }}>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={state.data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>

      //     <div className="container mt-4">
      //     {/* <input type="file" accept=".csv" onChange={handleSubmit} /> */}
      //       <h2>Diabetes Details</h2>
      //       <table className="table table-bordered" {...getTableProps()}>
      //         <thead className="thead-dark">
      //           {headerGroups.map(headerGroup => (
      //               <tr {...headerGroup.getHeaderGroupProps()}>
      //               {headerGroup.headers.map(column => (
      //                   <th {...column.getHeaderProps()}>{column.render('Header')}</th>
      //                 ))}
      //             </tr>
      //           ))}
      //         </thead>
      //         <tbody {...getTableBodyProps()}>
      //           {page.map(row => {
      //             prepareRow(row);
      //             return (
      //               <tr {...row.getRowProps()}>
      //                 {row.cells.map(cell => (
      //                   <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
      //                 ))}
      //               </tr>
      //             );
      //           })}
      //         </tbody>
      //       </table>

      //       <div className="pagination">
      //         <button onClick={() => previousPage()} disabled={!canPreviousPage}>
      //           Previous
      //         </button>
      //         <span>
      //           Page{' '}
      //           <strong>
      //             {pageIndex + 1} of {pageOptions.length}
      //           </strong>
      //         </span>
      //         <button onClick={() => nextPage()} disabled={!canNextPage}>
      //           Next
      //         </button>
      //       </div>
      //     </div>
      //   );
    );
  };

  return (
    <div>
      <DiabetesDetails data={data} />
    </div>
  );
};

export default View_dataset;
