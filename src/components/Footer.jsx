import React from 'react'
import SMS from '../img/SMS_logo.svg'
import PSS from '../img/pst.svg'
import INS from '../img/Sm/Instagram.svg'
import LIN from '../img/Sm/Linkedin.svg'

const Footer = () => {
  return (
    <div className='Footer'>

    {/* <div className="social">
        <img src={INS} />
        <img src={LIN} />
    </div> */}

    <div className="Imgs">
        <img src={SMS}/>
        <img src={PSS}/>
        <span>Lorem ipsum dolor sit amet consectetur<br></br> adipisicing elit. Placeat dolor voluptates cum asperiores ratione unde ea deleniti,<br></br> officia vero non!</span>
    </div>

    </div>
  )
}

export default Footer
