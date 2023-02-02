import React from 'react'
import Down from '../img/down.svg'
import Krat from '../img/kratos.svg'

const Ini = () => {
  return (

    <div className='Container'>
      <span>E-Book</span>
      <div className="Text">
        <h1>
            Composição de <br></br>
            Trilha Sonora <br></br>
            God Of War (2018)
        </h1>
         <h5>
         Trilhas Sonoras são extremamente importantes<br></br>
         Para criar uma sensação maior de imersão<br></br> 
         do usuário com a obra e o mundo.<br></br> 
         Ouça God Of War no Spotify
         </h5>
      </div>

    <div className='btn'>
        <img src={Down}/>
        <button className='btn1'>Baixar Trilha</button>   
    </div>

    <div className="Cover">
     <img src={Krat}/>
    </div>
      
     
    </div>
  )
}

export default Ini
