
import React from 'react'
// My components
import Navbar from '../components/Navbar'
import H1 from '../components/H1'
import BgVideo from '../components/BgVideo'
import LoginForm from '../components/Pages/Login/LoginForm'

export default function Login () {
  return (
    <div className='login'>
      <Navbar />
      <div className='columns'>
        <div className='column is-full'>
          <BgVideo />
          <div className='columns cover'>
            <div className='column is-flex is-align-items-center is-flex-direction-column'>
              <H1 text='Bienvenido' />
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
