import React,{useState} from 'react'
import {images} from '../../constants'
import './Navbar.scss'
import {HiMenuAlt4, } from 'react-icons/hi'
import {Hix} from 'react-icons/index'
import {motion} from 'framer-motion'


function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div>
         <img className='app__navbar-log' src={images.logo}></img>
      </div>
      <ul className='app__navbar-link'>
        {
          ['home','About','work','skills','constants'].map(
              (item)=>(
                <li className='app__flex' key={`link${item}`}>
                  <div></div>
                  <a href={`#{item}`} target="_blank" rel="noopener noreferrer">{item}</a>
                </li>
              )
            )
        }
      </ul>
      <div className=".app__navbar-menu">
        <HiMenuAlt4 onClick = {()=>setToggle(true)} className ="" />

        {
          toggle && (
            <motion.div whileInView={{x:[300,0]}}
              transition={{duration:0.85, ease: 'easeOut'}}
            >
              <Hix onClick = {()=>setToggle(false)}  />

              {
                ['home','About','work','skills','constants'].map(
                    (item)=>(
                      <li className='app__flex' key={item}>
                       
                        <a href={`#{item}`} onClick = {()=>setToggle(false)}  rel="noopener noreferrer">{item}</a>
                      </li>
                    )
                  )
              }

            </motion.div>
          )
        }
      </div>
    </nav>

  )
}

export default Navbar