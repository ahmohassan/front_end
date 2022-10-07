import React from 'react'
import {About , Header,Skills,Testimonial,Works,Footer} from  './containers'
import { Navbar } from './components'
import './App.scss'
// import {images} from './constants/assets/index'
const App = () => {
  return (
    <div className='app '>
      {/* <h1>Skills</h1> */}
      {/* <Navbar/>
      <Header/>
      <About />
      <Works /> 
      <Skills /> */}
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App