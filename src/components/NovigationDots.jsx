import React from 'react'

function NovigationDots({active}) {
  {
    console.log( active, ":helllo" ) 
  }
  return (
    <div className='app__navigation'>
        {
            ['home','about','works','skills','Testimonial','constants'].map(
            (item, index )=>(
                
                <a 
                    href={`#${item}`}
                    // href={`#${item}`}  
                    key={item + index}
                    // className='app__navigation__link'
                    rel="noopener noreferrer"
                    className={`${active==item ? 'activeColor' : 'inactiveColor '} app__navigation-dot `}
                    
                    
                />
               
            )
            )
        }
    </div>
  )
}

export default NovigationDots