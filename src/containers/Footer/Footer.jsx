import React,{useState} from 'react'
import './Footer.scss'
import {images} from '../../constants'
import { urlFor, client } from '../../client/client'
import {Appwrap, MotionWrap} from '../../wrapper'






function Footer() {


  const [formdata, setFormdata] = useState({name : '',message : '',email : ''})

  const [isFormSummited, setIsFormSummited] = useState(false)

  const [loding, setLoding] = useState(false)

  const {name, message, email} = formdata;

  const handleChangeInput =(e) => {

    const {name, value} = e.target;

    setFormdata({...formdata, [name]: value})



  }

  const handleSubmit =() => {
    setLoding(true)

   const contact ={
      _type : 'contact',
      name : name,
      email:email,
      message : message,
    }

    client.create(contact).then(
      () => {
        setLoding(false);
        setIsFormSummited(true); // 
      }
    );

  }

  return (
   <>
      <h2 className="head-text">Take A coffe & Chat With Me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a 
            href="mailto:ahmedmohamed7048@gmail.com" 
            className="p-text" 
          >
            Hello@Kafi.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a 
            href="tel:+252617237048" 
            className="p-text" 
          >
            +252617237048
          </a>
        </div>
      </div>


      {!isFormSummited ?  <div className="app__footer-form  app__flex">
        <div className="app__flex">
            <input type="text" value={name} id="" placeholder='Your name' 
            onChange={handleChangeInput} name='name'
            className="p-text" />
        </div>
        <div className="app__flex">
            <input type="email" name='email' value={email} id="" placeholder='Your email address'  
            onChange={handleChangeInput}
            className="p-text" />
        </div>
        <div>
          <textarea 
          className='p-text'
          name="message" 
          onChange={handleChangeInput}
          placeholder="Message"
          value={message} 
          />
        </div>

        <button className="p-text" onClick={handleSubmit}>{loding ? 'Loading..' : 'Sent Message'}</button>
      </div>
       :<div>
            <h3 className="head-text">Thank you for getting in touch</h3>
       </div>
      }
     
   </>
  )
}

export default Appwrap(
  MotionWrap(Footer, 'app__footer'),
  'contacts',
  'app__whitebg'
  
)