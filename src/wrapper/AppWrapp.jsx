import React from 'react'
import {NovigationDots, SocialMedia} from '../components'; 

const AppWrapp = (Component, idName,classNames) => function HOC() {
  return (
    <div  
        id={idName}
        className={`app__container ${classNames}`}
    >
        <SocialMedia/>
        
        <div className="app__wrapper app__flex" > 
            <Component />

            <div className="copyright">
                <p className='p-text'>@2022 AHM</p>
                <p className='p-text'>All rights are reseved</p>
            </div>
        </div>

        <NovigationDots active={idName}/>

    </div>
  )
}

export default AppWrapp