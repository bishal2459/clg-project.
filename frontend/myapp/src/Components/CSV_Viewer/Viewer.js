import React, { useState } from 'react'
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box, styled } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import {  ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';



const Btn = styled(Button)(
  {


  
    backgroundColor:'red',
    display:"flex",
    fontSize:"16px",
    fontWeight:"bold",
    borderRadius:"8px"
  
    
  }
)

const ButtonContainer=styled("div")({

  display:"flex",
  justifyContent:'center',
  alignItems:'center'
})


const Viewer = () => {
    const navigate=useNavigate()
    const { state } = useLocation();
    const [log_acc, setlogacc] = useState();
    const [svmacc, setsvmacc] = useState();
    const datasets = [
        { id: 1, name: state.name , fileName: state.file.name, fileDesc : state.description }
      ];
const[del,setDel]=useState(datasets);
      console.log(state)

      //submit
      const handleSubmit=()=>{
        navigate("/admin/upload/viewer/viewerdata", { state: {data:state.data} });

      }

      //delete
      const handleDelete = (e)=>{
        e.preventDefault();

        setDel(null);
      }




      

      //train
      const handleTrained=async()=>{
        const formData = new FormData();
        formData.append('file', state.file);

        try {
            const response = await axios.post('http://127.0.0.1:5000/train1', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
               
            });

            console.log('resposn0', response);

            if(response) {
              setlogacc(response.data.logistic_regression);
              setsvmacc(response.data.svm)

              localStorage.setItem('log-acc', response.data.logistic_regression);
              localStorage.setItem('svm-acc', response.data.svm);
            }
            

            console.log("hello")
            
        } catch (error) {
            console.error('There was an error uploading the file!', error);
        }
        toast.success("Model Trained Successfully !!"
        );
        console.log("ksdiof")

      }

  return (
    <Container >
    <Box sx={{ bgcolor: '#003366', color: 'white', py: 5, mt:20, width:'100%' , textAlign: 'center', mb: 2 }}>
      <Typography style={{fontWeight:"900"   }} variant="h4">ALL DIABETES DATASETS</Typography>
    </Box>

    <TableContainer component={Paper} sx={{mb:29}} >
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: '#003366', color: 'white' }}>
            <TableCell style={{ color: 'white' ,fontSize:"18px",fontWeight:"bold"}}>Sr. No.</TableCell>
            <TableCell style={{ color: 'white',fontSize:"18px" ,fontWeight:"bold"}}>Files Name</TableCell>
            <TableCell style={{ color: 'white',fontSize:"18px" ,fontWeight:"bold"}}>Original File Name</TableCell>
            <TableCell style={{ color: 'white',fontSize:"18px" ,fontWeight:"bold"}}>Description</TableCell>
            <TableCell style={{ color: 'white',fontSize:"18px" ,fontWeight:"bold"}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datasets.map((dataset, index) => (
            <TableRow key={dataset.id}>
              <TableCell style={{ fontSize:"18px"}}>{index + 1}</TableCell>
              <TableCell style={{ fontSize:"18px"}}>{dataset.name}</TableCell>
              <TableCell style={{ fontSize:"18px"}}>{dataset.fileName}</TableCell>
              <TableCell style={{ fontSize:"18px"}}>{dataset.fileDesc}</TableCell>
              <TableCell>
               <ButtonContainer >
               <Btn variant="contained" color="success" sx={{ mr: 1 }} onClick={handleSubmit}>View Data</Btn>
                {/* <Button variant="contained" color="error" sx={{ mr: 1 }} onClick={handleDelete}>Delete</Button> */}
                <Button variant="contained" color="primary" sx={{ mr: 1,fontSize:"16px" ,fontWeight:"bold", borderRadius:"8px"}} onClick={handleTrained}  >Train Model</Button>
               </ButtonContainer>
                <ToastContainer />

                {/* <Button variant="contained" color="info">Analysis</Button> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Container>
  )
}

export default Viewer









