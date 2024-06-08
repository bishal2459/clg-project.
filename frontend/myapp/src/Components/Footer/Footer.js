import React from 'react'
import "./footer.css"


const Footer = () => {
  return (
    <>
    
    <footer>
        <div class="footer-container">
            <div class="contact-info">
                <h2>Contact Info</h2>
                <p>Address: Jalpaiguri (W.B), India</p>
                <p>Mobile: (123) 456-7890</p>
                <p>Email: xyz123@gmail.com</p>
            </div>
            <div class="modules">
                <h2>Modules</h2>
                <ul>
                    <li><a href="#">Diabetes Dataset Module</a></li>
                    <li><a href="#">User Module</a></li>
                    <li><a href="#">Prediction Module</a></li>
                </ul>
            </div>
            <div class="project-links">
                <h2>Project Links</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About </a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Email Us</a></li>
                </ul>
            </div>
            <div class="about-project">
                <h2>About Project</h2>
                <p>Healthcare industry has huge amount of data that contains hidden information. This information supports decision making process on related area. In this research paper, we discussed various approaches of data mining which are useful in predicting the diabetes disease.</p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer