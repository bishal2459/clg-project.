import React, { useState } from 'react'
import axios from 'axios'
import "./howtouse.css"
import { useNavigate } from 'react-router-dom'
import { Modal } from '@mui/material'
import Prediction from '../Prediction/Prediction'
import {  ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const HowToUse = () => {
  const navigate=useNavigate()
  const[user,setUser]=useState({
    pregnancies:"",
    glucose:"",
    blood_pressure:"",
    insulin:"",
    skin_thickness:"",
    bmi:"",
    age:"",
    diabetes_pedigree_function:"",

  })

  const [open, setOpen] = useState(false);
  const [result, setResult] = useState('');

   let name,value;

  const handleInput=(e)=>{
    console.log(e)
    name=e.target.name;
    value=e.target.value

    setUser({...user,[name]:value})

  }



  // const h_preg=(e)=>setPreg[e.target.value]
  // const h_glucose=(e)=>setGlucose[e.target.value]
  // const h_blood=(e)=>setBp[e.target.value]
  // const h_insulin=(e)=>setInsulin[e.target.value]
  // const h_skin=(e)=>setSkin[e.target.value]
  // const h_bmi=(e)=>setBmi[e.target.value]
  // const h_pdf=(e)=>setDpfucntion[e.target.value]
  // const h_age=(e)=>setAge[e.target.value]




  const handleResult= async(e)=>{
    e.preventDefault();
    console.log(user)
    
    const formData={
      pregnancies : user.pregnancies,
      glucose : user.glucose,
      bloodpressure : user.blood_pressure,
      skinthickness : user.skin_thickness,
      insulin : user.insulin,
      bmi : user.bmi,
      dpf : user.diabetes_pedigree_function,
      age : user.age,
      
    }
    // console.log("user")

    
    
    
    try {
      const response = await axios.post('http://127.0.0.1:5000/check', formData, {
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin":"*"
        }
        
      });
      
      console.log("hello")
      
      console.log('response', response);

      if (response.data) {
        setOpen(true);
        setResult(response.data);
      }
      
      
      
      
      console.log("hello")
      
    } catch (error) {
      console.error('There was an error uploading the file!', error);
      toast.error("Server Down !!")
      
    }
    
    
  }
  
  
  // navigate("/howtouse/result")








  return (
   <>

   <Modal open={open} onClose={() => setOpen(false)}>
    <Prediction enteredData={user} result={result} />
   </Modal>

   
    <div className='header_check'>
    <h1 id='check_Db'>Check Your Diabetes</h1> 
  </div>
  <main className='main_check'>
    <div className="form-container">
      <form>
        <div className="form-group">
          <label for="pregnancies">Pregnancies</label>
          <input type="number" id="pregnancies" value={user.pregnancies} onChange={handleInput}   name="pregnancies" placeholder="Number of times pregnant"/>
        </div>
        <div className="form-group">
          <label for="glucose">Glucose</label>
          <input type="number" id="glucose" value={user.glucose} onChange={handleInput}name="glucose" placeholder="Glucose Level" />
        </div>
        <div className="form-group">
          <label for="blood-pressure">Blood Pressure</label>
          <input type="number" id="blood-pressure" value={user.blood_pressure} onChange={handleInput}  name="blood_pressure" placeholder="Diastolic blood pressure (mm Hg)" />
        </div>
        <div className="form-group">
          <label for="skin-thickness">Skin Thickness</label>
          <input type="number" id="skin-thickness" value={user.skin_thickness} onChange={handleInput} name="skin_thickness" placeholder="Triceps skin fold thickness (mm)" />
        </div>
        <div className="form-group">
          <label for="insulin">Insulin</label>
          <input type="number" id="insulin" value={user.insulin } onChange={handleInput} name="insulin" placeholder="2-Hour serum insulin (mu U/ml)" />
        </div>
        <div className="form-group">
          <label for="bmi">BMI</label>
          <input type="number" step="0.01" id="bmi" value= {user.bmi} onChange={handleInput}name="bmi" placeholder="Body mass index (weight in kg/(height in m)^2)" />
        </div>
        <div className="form-group">
          <label for="diabetes-pedigree-function">Diabetes Pedigree Function</label>
          <input type="number" step="0.01" id="diabetes-pedigree-function" value={user.diabetes_pedigree_function} onChange={handleInput}name="diabetes_pedigree_function" placeholder="Diabetes pedigree function" />
        </div>
        <div className="form-group">
          <label for="age">Age</label>
          <input type="number" id="age" value={user.age} onChange={handleInput}name="age" placeholder="Age (years)" />
        </div>
        <button id='check_Btn' type="submit" onClick={handleResult}>Check and Show Result</button>
        <ToastContainer />
      </form>
    </div>
  </main> 
   </>
  )
}

export default HowToUse





