import React from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom'


const Login =()=>{


    

const navigate=useNavigate()




const handleSubmit=()=>{
    navigate("/admin/upload")
}



return (

<>

<div className="login-container">
        <div className="login-header">
            <h2>LOGIN</h2>
        </div>
        <div className="login-form">
            <h3>LOGIN TO YOUR ACCOUNT</h3>
            <form action="your-login-endpoint" method="POST">
                <input type="text" name="username" placeholder="Username" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit" onClick={handleSubmit}>SIGN IN</button>
            </form>
        </div>
    </div>


</>




)

}



export default Login