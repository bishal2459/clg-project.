import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <>
     <main>
     <div className='header_check'>
    <h1 id='check_Db'>Contact us</h1> 
  </div>
    
    <div className="contact-form">
      {/* <h3>Drop Us A Line So That We Can Hear From You</h3> */}
      <form>
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" name="name"/>
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" name="email"/>
        </div>
        <div>
          <label for="phone">Phone</label>
          <input type="tel" id="phone" name="phone"/>
        </div>
        <div>
          <label for="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button id='check_Btn' type="submit">Submit</button>
      </form>
    </div>
    {/* <div className="contact-info">
      <div className="address">
        <h3>Address</h3>
        <p>Revox Crossraid, 85/B Cross Street, New York, USA</p>
        <p>NA1 42SL</p>
      </div>
      <div className="business-hours">
        <h3>Business Hours</h3>
        <p>Monday - Friday 8am to 4pm</p>
        <p>Saturday - 7am to 6pm</p>
        <p>Sunday - Closed</p>
      </div>
      <div className="telephone">
        <h3>Telephone</h3>
        <p>+088-01234567890</p>
        <p>+088-01234567890</p>
      </div>
    </div> */}
  </main>
    </>
  )
}

export default Contact








{/* <main>
    <h2>Contact Us</h2>
    <div className="contact-info">
      <div className="address">
        <h3>Address</h3>
        <p>Revox Crossraid, 85/B Cross Street, New York, USA</p>
        <p>NA1 42SL</p>
      </div>
      <div className="business-hours">
        <h3>Business Hours</h3>
        <p>Monday - Friday 8am to 4pm</p>
        <p>Saturday - 7am to 6pm</p>
        <p>Sunday - Closed</p>
      </div>
      <div className="telephone">
        <h3>Telephone</h3>
        <p>+088-01234567890</p>
        <p>+088-01234567890</p>
      </div>
    </div>
    <div className="contact-form">
      <h3>Drop Us A Line So That We Can Hear From You</h3>
      <form>
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" name="name">
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" name="email">
        </div>
        <div>
          <label for="phone">Phone</label>
          <input type="tel" id="phone" name="phone">
        </div>
        <div>
          <label for="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </main> */




  //CSS

  /*main {
  padding: 20px;
}

.contact-info {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.contact-info div {
  flex: 1;
  margin: 0 10px;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.contact-form h3 {
  text-align: center;
}

.contact-form form {
  display: flex;
  flex-direction: column;
}

.contact-form div {
  margin-bottom: 15px;
}

.contact-form label {
  margin-bottom: 5px;
  display: block;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.contact-form textarea {
  height: 100px;
}

button {
  padding: 10px;
  background-color: #00a651;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #007a42;
} */













}


