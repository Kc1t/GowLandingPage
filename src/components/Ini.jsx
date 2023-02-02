import React from 'react'
import Down from '../img/down.svg'
import Krat from '../img/kratos.svg'

const Ini = () => {
  return (

    <div className='Container'>
      <span>E-Book</span>
      <div className="Text">
        <h1>LookDev de <br></br>
            Personagem 3D <br></br>
             Rafael Grassetti
        </h1>
         <h5>
         Aprenda a criar um personagem 3D<br></br>
         passando por múltiplas técnicas de Look<br></br> 
         Development utilizadas na indústria de<br></br> 
         Cinematic.
         </h5>
      </div>

      <div className='btn'>
      <img src={Down} alt="" />
      <button className='btn1'>Baixar E-book</button>
      </div>

      <div className="Cover">
        <img src={Krat} alt="" />
      </div>
      
     
    </div>
  )
}

export default Ini
