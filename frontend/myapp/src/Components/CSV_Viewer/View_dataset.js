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
        
      </div>

      
    );
  };

  return (
    <div>
      <DiabetesDetails data={data} />
    </div>
  );
};

export default View_dataset;
