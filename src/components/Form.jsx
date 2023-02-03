import React from 'react'
import Cover from '../img/Cover/FormCover.svg'

const Form = () => {
  return (
    <div className='Form'
    style={{ backgroundImage:`url(${Cover})`, backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
    id='Contact'
    >

      <form action="">
        <h4>Receba Mais</h4>
        <span>Preencha o formulário abaixo para acessar mais</span>

        <input type="text" placeholder='Nome'/>
        <input type="email" placeholder='Seu Melhor Email'/>
        <input type="tel" placeholder='DDD + Telefone'/>
        <input type="text" placeholder='Empresa'/>
        <input type="text" placeholder='Cargo'/>

        <button>Receber Agora</button>
      </form>

    </div>
  )
}

export default Form
