
import React, { useEffect } from 'react'
import Router from 'next/router'
// My components
import BgVideo from 'components/BgVideo'
import H1 from 'components/H1'
import LoginForm from 'components/Pages/Login/LoginForm'
import Navbar from 'components/Navbar'
import Seo from 'components/SEO'

export default function Login () {
  useEffect(() => {
    const token = window.sessionStorage.getItem('token')
    if (token) Router.replace('clases')
  })

  return (
    <div className='login'>
      <Seo />
      <style global jsx>{`
        body ::-webkit-scrollbar {
          width: 0;
         }
      `}
      </style>
      <Navbar />
      <div className='columns'>
        <div className='column is-full'>
          <BgVideo video='https://prismic-io.s3.amazonaws.com/kodemia/d58417e7-a700-4c67-a3e2-5a746d3df0b2_home-background.mp4' />
          <div className='columns cover'>
            <div className='column is-flex is-align-items-center is-flex-direction-column'>
              <H1 text='Bienvenido' />
              <div className='form-container'>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
