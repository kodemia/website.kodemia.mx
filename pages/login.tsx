
import React, { useEffect } from 'react'
import Router from 'next/router'

import BgVideo from 'components/BgVideo'
import H2 from 'components/H2'
import LoginForm from 'components/Pages/Login/LoginForm'
import Navbar from 'components/Navbar'
import Seo from 'components/SEO'

import Auth from 'lib/auth'

export default function Login () {
  useEffect(() => {
    if (!Auth.isExpired()) Router.replace('clases')
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
              <H2>
                Bienvenido
              </H2>
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
