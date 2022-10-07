import React,{useState,useEffect} from 'react'
import './Testimonial.scss'
import {motion} from 'framer-motion'
import { urlFor, client } from '../../client/client'
import {Appwrap, MotionWrap} from 
'../../wrapper'
import {HiChevronDown, HiChevronLeft, HIchevronLeft, HiChevronRight, HIchevronRight} from 'react-icons/hi'



function Testimonial() {

 


  const [brands, setBrands] = useState([])
  const [testimonils, setTestimonils] = useState([])

      const [currentIndex, setCurrentIndex] = useState(0)


      useEffect(() => {
        const Testimonialsquery ='*[_type == "testimonials"]'
        const Brandsquery ='*[_type == "brands"]'  

        client.fetch(Testimonialsquery).then((data)=>{
          
          console.log('i,m data: ',data)
          setTestimonils(data)
        })



        client.fetch(Brandsquery).then((data)=>{
          setBrands(data)
        })
      }, [])
      const testimon = testimonils[currentIndex];


      const handleClick =(index)=>{
        setCurrentIndex(index);
      }

  return (
    
    <>
        {
          testimonils.length && (
            <>
              <div className="app__testimonial-item app__flex">

                <img src={urlFor(testimon.imgurl)} alt="tes" />


                <div className="app__testimonial-content">
                  <p className="p-text">
                   {testimon.feedback}
                  </p>
                  <div>
                    <h4 className="bold-text">
                      {testimon.name}
                    </h4>
                    <p className="p-text">
                      {testimon.company}
                    </p>
                  </div>
                </div>


              </div>

              <div className="app__testimonial-btns app__flex ">
                  <div className="app__flex" onClick={()=>handleClick(currentIndex ===0 ?  testimonils.length -1 : currentIndex - 1)}>
                    <HiChevronLeft/>
                  </div>
                  <div className="app__flex" onClick={()=>handleClick(currentIndex ===testimonils.length -1 ?  0 : currentIndex + 1)}>
                    <HiChevronRight/>
                  </div>
              </div>
            </>
          )
        }


        <div className="app__testimonial-brands app__flex">


          {
            brands.map(
              (brand)=>(
                <motion.div 

            whileInView={{opacity :[0,1]}}

            transitionTo={{duration :0.5 ,type:'tween'}}
            key={brands._id}

            >

              <img src={urlFor(brand.imgUrl)} alt={brand} />

            </motion.div>
              )
            )
          }

        </div>

    </>
  )
}

export default Appwrap(
  MotionWrap(Testimonial , 'app__testimonial') , 
  'Testimonial',
  'app__primarybg'
)