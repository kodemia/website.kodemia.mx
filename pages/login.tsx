
import React, { useEffect } from 'react'
import Router from 'next/router'
import classNames from 'classnames'

import BgVideo from 'components/BgVideo'
import H2 from 'components/H2'
import LoginForm from 'components/Pages/Login/LoginForm'
import Navbar from 'components/Navbar'
import Seo from 'components/SEO'

import Auth from 'lib/auth'

export default function Login() {
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
      <div className='is-full'>
        <BgVideo video='https://prismic-io.s3.amazonaws.com/kodemia/d58417e7-a700-4c67-a3e2-5a746d3df0b2_home-background.mp4' />
        <div className={classNames(
          'bg-brand-black-dark opacity-90',
          'w-full h-screen',
          'pt-36 md:pt-44 lg:pt-48',
          'flex justify-center items-start',
          'absolute top-0'
        )}>
          <div className={classNames(
            'flex justify-center flex-col w-full',
            'px-6 md:px-0  md:w-[420px]',
            'text-center'
          )}>
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
  )
}
