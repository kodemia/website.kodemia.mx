
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

  useEffect (() => {
    setIsLoggedIn(!!Auth.get())
  })

  const signOut = () => {
    Auth.reset()
    tracker.onLogOut()
    setIsLoggedIn(false)
    router.push('/login')
  }

  return (
    <nav className={classNames(
      'bg-brand-black opacity-90',
      'fixed z-40 w-full top-0',
      'flex justify-center',
      'px-6 md:px-16 lg:px-12 py-4'
    )}>
      <div className={classNames(
        'w-full lg:max-w-screen-xl',
        'flex justify-between',
        'flex-col lg:flex-row'
      )}>
        <div className={classNames(
          'w-full lg:w-36',
          'flex justify-between'
        )}>
          <Link href='/'>
            <a>
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
            className={classNames(
              'h-full lg:hidden',
              'flex flex-col'
            )}
          >
            {!isActive && (
              <div className={classNames('h-full flex flex-col justify-center')}>
                <div className={classNames('h-[5px] w-4 border-b-[1px] border-solid border-brand-complementary')} />
                <div className={classNames('h-[5px] w-4 border-b-[1px] border-solid border-brand-complementary')} />
                <div className={classNames('h-[5px] w-4 border-b-[1px] border-solid border-brand-complementary mb-1')} />
              </div>
            )}
            {isActive && (
              <div className={classNames(
                'h-full w-2 relative mt-2',
                "after:content-[' '] after:absolute after:rotate-45 after:bg-brand-complementary after:w-[1px] after:h-4 after:mt-1",
                "before:content-[' '] before:absolute before:-rotate-45 before:bg-brand-complementary before:w-[1px] before:h-4 before:mt-1"
              )}>
              </div>
            )}
          </a>
        </div>
        <div className={classNames('w-full ease-linear',
          {
            'is-active': isActive
          }
        )}
        >
          <div className={classNames(
            'justify-between flex-col pt-4',
            'lg:flex-row lg:flex lg:pt-0',
            {
              'hidden': !isActive
            }
          )}
          >
            <div className={classNames(
              'w-full',
              'flex justify-center items-center',
              'flex-col lg:flex-row'
            )}>
              {
                navbarLinks.map(({ name, href, onlyLoggedIn }, index) => (
                  <Link href={href} key={index}>
                    <a className={classNames(
                      'w-full py-4',
                      'lg:w-auto lg:py-0 lg:px-3 xl:px-4',
                      'hover:text-brand-primary hover:bg-brand-black-dark lg:hover:bg-transparent',
                      { 'is-hidden': onlyLoggedIn && !isLoggedIn }
                    )}
                    >
                      {name}
                    </a>
                  </Link>
                ))
              }
            </div>
            <div className={classNames(
              'my-4 flex flex-col',
              'md:flex-row lg:my-0'
            )}>
              <div className={classNames(
                'my-4',
                'md:my-0 md:w-2/4 md:mr-5',
                'lg:w-36 lg:mr-4',
                'xl:mr-8'
              )}>
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
              <div className={classNames(
                'md:w-2/4 md:ml-5',
                'lg:ml-0 lg:w-36 lg:mr-0'
              )}>
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
