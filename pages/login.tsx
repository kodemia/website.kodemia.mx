
import React, { useEffect } from 'react'
import Router from 'next/router'
// My components
import Navbar from '../components/Navbar'
import H1 from '../components/H1'
import BgVideo from '../components/BgVideo'
import LoginForm from '../components/Pages/Login/LoginForm'
// API
import { login } from '../lib/api'

export default function Login () {
  useEffect(() => {
    const token = sessionStorage.getItem('token')
    if (token) Router.replace('clases')
  })

  async function handleForm (email: string, password: string) {
    try {
      const token = await login(email, password)
      sessionStorage.setItem('token', token)
      Router.push('clases')
    } catch (error) {
      console.log('ERROR', error)
    }
  }

  return (
    <div className='login'>
      <Navbar />
      <div className='columns'>
        <div className='column is-full'>
          <BgVideo />
          <div className='columns cover'>
            <div className='column is-flex is-align-items-center is-flex-direction-column'>
              <H1 text='Bienvenido' />
              <LoginForm callback={handleForm} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
