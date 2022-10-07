import React,{useState,useEffect} from 'react'
import './skills.scss'
import {motion} from 'framer-motion'
import { urlFor, client } from '../../client/client'
import ReatTooltip from 'react-tooltip'
import {Appwrap, MotionWrap} from '../../wrapper'


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
            experiences?.map(
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
                        {/* d */}

                        {
                          item?.works?.map(
                            (data)=>(
                                <>
                                <motion.div
                                whileInView={{opacity:[0,1]}}
                                transition={{duration:0.5}}
                                key={data.name} 
                                className='app__skills-exp-work'
                                data-tip
                                data-for={
                                  data.name
                                }
                                >
                                  <h4 className="bold-text">{data.name}</h4>
                                  <p className="p-text">
                                    {data.company}
                                  </p>
                                </motion.div>
                                <ReatTooltip
                                  id={data.name}
                                  effect="solid"
                                  className="app__skills-tooltip"

                                >
                                  {data.desc}

                                </ReatTooltip>
                              </>
                            )
                          )
                        }



                        {/* d */}
                    </motion.div>
                </motion.div>
                </>
              )
            )
           
          }
        </motion.div>
      </div>
    </>
  )
}

export default Appwrap(
  MotionWrap(Skills , 'app__skills') , 
  'skills',
  'app__whitebg'
)