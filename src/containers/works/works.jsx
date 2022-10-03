import React,{useState,useEffect} from 'react'
import './works.scss'
import {motion} from 'framer-motion'
import { urlFor, client } from '../../client/client'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import {Appwrap} from '../../wrapper'

function WorksApp() {

  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const handleWorkFilter = (item)=>{}
  const [animateCard, setAnimateCard] = useState({y:0, opacity:1});


  useEffect(() => {
    
    const query = '*[_type == "works"]'

    client.fetch(query)
    .then((data) => {
      setWorks(data);
      setFilterWork(data);
    }
    )
  
   
  }, [])
  


  return (
    <>
        <h2 className="head-text">My creative<span> Profile </span><span>Sections</span></h2>
        <div className="app__work-filter">
          {
            ['UI/UX','Web app','Moible App','React js','All'].map(
              (item, index)=>{
                return(
                  <div 
                  style={{textAlign: 'center'}}
                  className={"app__work-filter-item app_flex p-text ${activeFilter=== item ? 'item-active': '' } "}
                  key={index}
                  onClick={()=>handleWorkFilter(item)}
                   
                  >
                    {item}
                  </div>
                )
              }
            )
          }
        </div>

        <motion.div
          transition={{duration:0., delayChildren:0.5}}
          animate={animateCard}
          className="app__work-portfolio"
        >


          {
            filterWork.map(
              
              (work,index)=>(
                <div 
                  key={index}
                  className="app__work-item app__flex"
                >

                    <div className="app__work-img app__flex" style={{position:'relative'}}>

                        {/* <h2 className="bold-text" style={{marginTop:20}}>{work.title}</h2> */}
                    
                          <img src={urlFor(work.imgUrl)} alt="work.naem" />

                          <motion.div
                          whileHover={{opacity:[0,1]}}
                          transition={{duration:0.25, ease :"easeInOut" ,staggerChildren:0.5}}
                          className="app__work-hover app__flex"
                          style={{position:"absolute"}}

                          >
                            <a href={work.projectLink} target="_blank" rel='norefer'>
                              <motion.div 
                              whileInView={{scale:[0,0.1]}}
                              whileHover={{scale:[0,1]}}
                              transition={{duration:0.25,}}
                              className="app__flex"
                              style={{}}
                              >

                                <AiFillEye/>

                              </motion.div>
                            </a>

                            <a href={work.codeLink} target="_blank" rel='norefer'>
                              <motion.div 
                              whileInView={{scale:[0,0.1]}}
                              whileHover={{scale:[0,1]}}
                              transition={{duration:0.25,}}
                              className="app__flex"
                              style={{}}
                              >

                                <AiFillGithub/>

                              </motion.div>
                            </a>

                        </motion.div>


                    </div>

                  <div className="app__work-content app__flex">
                    <h4 className="bold-text">{work.title} </h4>
                    <p className="p-text" style={{marginTop:10}}>{work.description}</p>

                    <div className="app__work-tag app__flex">
                    <p className="p-text" style={{marginTop:10}}>{work.tags}</p>

                    </div>
                  </div>

                </div>
              )
            )
          }


        </motion.div>
    </>
  )
}

export default Appwrap(WorksApp , 'works', "works")