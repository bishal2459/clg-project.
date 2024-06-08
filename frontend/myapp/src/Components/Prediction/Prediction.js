import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
// import axios from 'axios';


const Prediction = ({ enteredData, result }) => {

  const logAcc = localStorage.getItem('log-acc');
  const svmAcc = localStorage.getItem('svm-acc');

    const results = [
        { algorithm: 'Logistic Regression', accuracy: logAcc*100 , result: "suffering from diabetic ", name: 'logistic_regression' },
        { algorithm: 'SVM', accuracy: svmAcc*100, result: 'Suffered From Diabetes Disease', name: 'svm' },
        // { algorithm: 'Random Forest', accuracy: 78.57, result: 'Suffered From Diabetes Disease' },
        // { algorithm: 'Naive Bayes', accuracy: 79.22, result: 'Suffered From Diabetes Disease' },
        // { algorithm: 'KNN', accuracy: 75.97, result: 'Suffered From Diabetes Disease' },
        // { algorithm: 'Decision Tree', accuracy: 81.82, result: 'Suffered From Diabetes Disease' },
      ];
    
      const userData = [
        { label: 'Pregnancies', value: enteredData.pregnancies },
        { label: 'Glucose', value: enteredData.glucose },
        { label: 'Blood Pressure', value: enteredData.blood_pressure },
        { label: 'Skin Thickness', value: enteredData.skin_thickness },
        { label: 'Insulin', value: enteredData.insulin },
        { label: 'BMI', value: enteredData.bmi },
        { label: 'Diabetes Pedigree Function', value: enteredData.diabetes_pedigree_function },
        { label: 'Age', value: enteredData.age },
      ];


  return (
    <Container sx={{ bgcolor: 'white' }}>
    <Box sx={{ bgcolor: '#003366', color: 'white', py: 2, textAlign: 'center', mb: 2 }}>
      <Typography variant="h4" style={{fontWeight:"900"}}>DIABETES PREDICTION</Typography>
    </Box>

    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" align="center" style={{fontWeight:"900"}}>Your diabetes Disease Prediction Results</Typography>
      <TableContainer component={Paper}>
        <Table style={{marginTop:"19px"}}>  
          <TableHead >
            <TableRow >
              <TableCell style={{fontSize:"20px" , fontWeight:"600"}}>Algorithm Name</TableCell>
              <TableCell style={{fontSize:"20px" , fontWeight:"600"}}>Accuracy Score</TableCell>
              <TableCell style={{fontSize:"20px" , fontWeight:"600"}}>Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((row, index) => (
              <TableRow key={index}>
                <TableCell style={{fontSize:"18px" , fontWeight:"200"}}>{row.algorithm}</TableCell>
                <TableCell style={{fontSize:"18px" , fontWeight:"200"}}>{row.accuracy}</TableCell>
                <TableCell style={{ fontSize:"18px" ,color: result[row.name] === 'Diabetic' ? '#f50707' : '#04AA6D',fontWeight:"900" }}>{result[row.name]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>

    <Box>
      <Typography variant="h6" align="center"style={{fontSize:"20px" , fontWeight:"600"}} >Data values entered by user</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{fontSize:"18px" , fontWeight:"600"}}>Label</TableCell>
              <TableCell style={{fontSize:"18px" , fontWeight:"600"}}>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((row, index) => (
              <TableRow key={index}>
                <TableCell style={{fontSize:"17px" , fontWeight:"400"}}>{row.label}</TableCell>
                <TableCell style={{fontSize:"17px" , fontWeight:"400"}}>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <img src="diabetes_test.jpg" alt="Diabetes Test" style={{ width: '200px' }} />
      </Box> */}
    </Box>
  </Container>
);
  
}

export default Prediction









