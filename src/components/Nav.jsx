import React from 'react'
import SMS from '../img/SMS_logo.svg'

const Nav = () => {
  return (
    <div className='nav' >
      <span><img src={SMS}/></span>
      <ul>
        <li>E-Book</li>
        <li>Tópicos Abordados</li>
        <li>Quem Faz?</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
    </div>
  )
}

export default Nav
