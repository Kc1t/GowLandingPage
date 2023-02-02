import React from 'react'
import Down from '../img/down.svg'
import Krat from '../img/kratos.svg'

const Ini = () => {
  return (

    <div className='Container'>
      <span>E-Book</span>
      <div className="Text">
        <h1>Composição de <br></br>
            Trilha Sonora <br></br>
             God Of War (2018)
        </h1>
         <h5>
         Lorem ipsum, dolor sit amet consectetur adipisicing.<br></br>
         Lorem ipsum dolor sit amet adaw.<br></br> 
         Lorem ipsum dolor sit amet consectetur.<br></br> 
         Lorem, ipsum.
         </h5>
      </div>

      <div className='btn'>
      <img src={Down} alt="" />
      <button className='btn1'>Baixar Trilha</button>
      </div>

      <div className="Cover">
        <img src={Krat} alt="" />
      </div>
      
     
    </div>
  )
}

export default Ini
