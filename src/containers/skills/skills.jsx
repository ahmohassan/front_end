import React,{useState,useEffect} from 'react'
import './skills.scss'
import {motion} from 'framer-motion'
import { urlFor, client } from '../../client/client'
import ReatTooltip from 'react-tooltip'
import {Appwrap} from '../../wrapper'

function Skills() {

  const [experiences, setExperiences] = useState([])
  const [myskills, MysetSkills] = useState([])

  useEffect(() => {
    const Experiencesquery ='*[_type == "experiences"]'
    const Skillsquery ='*[_type == "skills"]'  
  
    client.fetch(Experiencesquery).then((data)=>{
      setExperiences(data)
    })

    client.fetch(Skillsquery).then((data)=>{
      MysetSkills(data)
    })
  }, [])

  // experiences.map((data)=>{
  //   // console.log(data.works[0])
  //   data.works.map(
  //     (item)=>{
  //       console.log(item)
  //     }
  //   )
  // })
  
  // console.log(myskills)
  

  return (
    <>
      <h2 className="head-text">
        Skilss & Experience
      </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {
              myskills.map(
                (data,index)=>(
                    <motion.div 
                    className="app__skills-item app__flex"
                    whileInView={{opacity:[0,1]}}
                    transition={{duration:0.5}}
                    key={data.index}
                    >
                      <div 
                        className="app__flex" 
                        style={{backgroundColor:data.bgColor}}
                      >
                        <img src={urlFor(data.icon)} alt="data.name" />
                      </div>
                      <p className="p-text">{data.name}</p>
                  </motion.div>
                )
                 )
          }
        </motion.div>


        {/* Exprc */}
        <motion.div
         className='app__skills-exp'
        >
          {
            experiences.map(
              (item)=>(
                <>
                <motion.div 
                className='app__skills-exp-item'
                key={item.id}
                >
                    <div className="app__skills-exp-year">
                        <p className="p-text">{item.year}</p>
                    </div>
                    {/* //Fix here */}
                    <motion.div className='app__skills-exp-works'>

                    </motion.div>
                </motion.div>
                </>
              )
            )
            // experiences.works.map(
            //   (work)=>(
            //     <>
            //       <motion.div
            //        whileInView={{opacity:[0,1]}}
            //        transition={{duration:0.5}}
            //        key={work.name} 
            //        className='app__skills-exp-work'
            //       //  data-tip
            //        data-for={
            //         work.name
            //        }
            //       >

            //       </motion.div>
            //     </>
            //   )
            // )
          }
        </motion.div>
      </div>
    </>
  )
}

export default Appwrap(Skills , 'skills','skills')