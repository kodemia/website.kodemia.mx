
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// my components
import Button from 'components/Button'
import { navbarLinks } from 'config/pageLinks'

import Auth from 'lib/auth'
import * as tracker from 'lib/tracker'
import classNames from 'classnames'

export default function Navbar () {
  const [isActive, setIsActive] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()
  useEffect(() => {
    setIsLoggedIn(!!Auth.get())
    console.log('cargo',isActive)
  })

  const signOut = () => {
    Auth.reset()
    tracker.onLogOut()
    setIsLoggedIn(false)
    router.push('/login')
  }

  return (
    <nav className={classNames(
      'bg-brand-black-transparent',
      'fixed z-40 w-full top-0',
      'flex justify-center',
      'px-6 md:px-16 lg:px-12 py-4'
    )}>
      <div className={classNames('lg:max-w-screen-xl w-full',
        'flex justify-between flex-col lg:flex-row '
      )}>
        <div className={classNames(' w-full lg:w-36 flex justify-between')}>
          <Link href='/'>
            <a className='navbar-item'>
              <img
                src='/icons/kodemia-logo.svg'
                alt='Logo'
                width='128'
                height='35'
              />
            </a>
          </Link>
          <a
            onClick={() => {
              setIsActive(!isActive)
              console.log(isActive)
            }}
            role='button'
            className={classNames(
              'h-full  lg:hidden flex flex-col',
            )}
            // aria-label='menu'
            // aria-expanded='false'
          >
          { !isActive && (
            <>
             <div className={classNames('h-2 w-6 border-b-2 border-solid border-brand-complementary')}/>
             <div className={classNames('h-2 w-6 border-b-2 border-solid border-brand-complementary')}/>
             <div className={classNames('h-2 w-6 border-b-2 border-solid border-brand-complementary')}/>
            </>
          )
          }
           { isActive && (
            <div className='bg-pink-200'>
             <div className={classNames('h-2 w-6 border-b-2 border-solid border-brand-complementary')}/>
             <div className={classNames('h-2 w-6 border-b-2 border-solid border-brand-complementary')}/>
            </div>
          )
          }
          </a>
        </div>
        <div className={classNames(
          ' w-full',
          {
            'is-active': isActive
          }
        )}
        >
          <div className={classNames(' lg:flex justify-between flex-col lg:flex-row pt-4 lg:pt-0',{
            'hidden': !isActive
          })}>
            <div className={classNames('w-full flex justify-center items-center flex-col lg:flex-row')}>
              {
                navbarLinks.map(({ name, href, onlyLoggedIn }, index) => (
                  <Link href={href} key={index}>
                    <a className={classNames(
                      'py-4 lg:py-0 w-full lg:w-auto hover:text-brand-primary  hover:bg-brand-black-transparent lg:hover:bg-transparent lg:px-3 xl:px-4',
                      { 'is-hidden': onlyLoggedIn && !isLoggedIn }
                    )}
                    >
                      {name}
                    </a>
                  </Link>
                ))
              }
            </div>
            <div className={classNames('flex flex-col md:flex-row my-4 lg:my-0')}>
              <div className={classNames('my-4 md:my-0 md:w-2/4 md:mr-5 lg:w-36 lg:mr-4 xl:mr-8 ')}>
                {isLoggedIn &&
                  <Button
                    label='Cerrar sesión'
                    onClick={signOut}
                  />}
                {!isLoggedIn &&
                  <Button
                    label='Iniciar sesión'
                    link='/login'
                  />}
              </div>
              <div className={classNames(' md:w-2/4 md:ml-5 lg:ml-0 lg:w-36 lg:mr-0')}>
                <Button
                  isPrimary
                  label='Aplica hoy'
                  link='/aplicar'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
};
