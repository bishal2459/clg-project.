import React, { useState } from 'react';
import "./upload.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';


const Upload = () => {

    const [file, setFile] = useState(null);

    const [name, setName] = useState('');
    const [description, setDesc] = useState('');


    const [array, setArray] = useState([]);

  const fileReader = new FileReader();

  const navigate = useNavigate();

    const csvFileToArray = string => {
        const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
        const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
    
        const a = csvRows.map(i => {
          const values = i.split(",");
          const obj = csvHeader.reduce((object, header, index) => {
            object[header] = values[index];
            return object;
          }, {});
          return obj;
        });
    
        console.log('array', a);
        setArray(a);
        return a;
      };
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
        const f = e.target.files[0];

        if (f) {
            fileReader.onload = function (event) {
              const text = event.target.result;
              const a = csvFileToArray(text);
              console.log('a', a);
            };
            
            fileReader.readAsText(f);

          }

    };

      console.log('arraay', array);
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (file) {
            navigate('/admin/upload/viewer', { state: { data: array, name: name, description: description, file:file } })

          }
      
        // const formData = new FormData();
        // formData.append('file', file);

        // try {
        //     const response = await axios.post('http://127.0.0.1:5000/train1', formData, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data'
        //         }
               
        //     });

        //     console.log('resposn0', response);
            

        //     console.log("hello")
            
        // } catch (error) {
        //     console.error('There was an error uploading the file!', error);
        // }
    };




  return (
<>
    
<div class="container">
        <h2>Upload Diabetes Dataset for Prediction</h2>
        <form id='upload_form'>
            <div class="form-group">
                <label for="diabetes-name">Diabetes Name</label>
                <input type="text" id="diabetes-name" name="diabetes-name" onChange={(e)=>setName(e.target.value)}  placeholder="File Name"/>
            </div>
            <div class="form-group">
                <label for="diabetes-file">Upload Diabetes File</label>
                <input type="file" id="diabetes-file" name="diabetes-file"onChange={handleFileChange}/>
            </div>
            <div class="form-group">
                <label for="file-description">Description of the File</label>
                <textarea id="file-description" name="file-description"  onChange={(e)=>setDesc(e.target.value)} rows="4" placeholder="Description"></textarea>
            </div>
            <div class="form-group">
                <button type="submit" onClick={handleSubmit} >Submit</button>
                {/* <button type="submit" onClick={handleviewer} >Submit</button> */}
            </div>
        </form>


        
    </div>

    
    
    
    
    



</>
  )
}

export default Upload







