import React from 'react'
import SMS from '../img/SMS_logo.svg'

const Nav = () => {
  return (
    <div className='nav' >
      <span>
        <img src={SMS}/>
      </span>
      <ul>
        <li>E-Book</li>
        <li> <a href='#nav'>Sobre</a></li>
        <li><a href='#Trilha'>Trilha</a></li>
        <li>Franquia</li>
        <li><a href='#Contact'>Contato</a></li>
      </ul>
    </div>
  )
}

export default Nav
