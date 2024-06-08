import React from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import "./App.css"
import {Routes ,Route} from  "react-router-dom"
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import HowToUse from './Components/Check/HowToUse'
import Login from './Components/Login/Login'
import Upload from './Components/Upload_CSV/Upload'
import Prediction from './Components/Prediction/Prediction'
import Viewer from './Components/CSV_Viewer/Viewer'
import View_dataset from './Components/CSV_Viewer/View_dataset'




const App = () => {
  return (
   <>
   <Header/>
   <Routes>
  
  <Route exact path='/' element={<Home/>}/>
  <Route exact path='/info' element={<About/>}/>
  <Route exact path='/contact' element={<Contact/>}/>
  <Route exact path='/howtocheck' element={<HowToUse/>}/>
  <Route exact path='/admin' element={<Login/>}/>
  <Route exact path='/admin/upload' element={<Upload/>}/>
  <Route exact path='/howtouse/result' element={<Prediction/>}/>
  <Route exact path='/admin/upload/viewer' element={<Viewer/>}/>
  <Route exact path='/admin/upload/viewer/viewerdata' element={<View_dataset/>}/>

   </Routes>
   
   <Footer/>
   </>
  )
}

export default App