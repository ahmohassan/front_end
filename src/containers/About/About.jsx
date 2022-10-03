import React,{useState,useEffect} from 'react'
import './About.scss'
import {motion} from 'framer-motion'
import { urlFor, client } from '../../client/client'
import {Appwrap} from '../../wrapper'
// import { urlFor, client } from '../../client/'


// const abouts =[
//   {
//     title :'Web Application',
//     describtion : 'i am good software development. and web Application and development',
//     imgUrl : images.about1
//   },
//   {
//     title :'Mobile Application',
//     describtion : 'i am good software development. and web Application and development',
//     imgUrl : images.about2
//   },
//   {
//     title :'Software Development',
//     describtion : 'i am good software development. and web Application and development',
//     imgUrl : images.about3
//   },
//   {
//     title :'Desktop Application',
//     describtion : 'i am good software. ',
//     imgUrl : images.about4
//   },

// ]

function About() {


  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
   const query ='*[_type=="abouts"]'; 

   client.fetch(query)
    .then((data) => setAbouts(data)  
    
    
    )

  }, []);

  // console.log(abouts)
  console.log( abouts )
  

  return (
    <>
      <h2 className="head-text">I know that <span> Good App </span><br/> Means<span>Good Business</span></h2>
      <div className="app__profiles">

        {
          abouts.map((about, index) => 
            (
              <motion.div 
                key={about.title + index} className="app__profile-item"
                whileInView={{opacity:1}}
                whileHover={{scale:1.2}}
                transition={{duration:0.5,type: 'tween'}}
              
              >

                <img src={urlFor(about.imgUrl)} alt={about.title} />
                <h2 className="bold-text" style={{marginTop:20}}>{about.title}</h2>
                <p className="p-text" style={{marginTop:10}}>{about.description}</p>

              </motion.div>
            )
          )
        }


      </div>
    </>
  )
}

export default Appwrap(About, 'about', 'about')