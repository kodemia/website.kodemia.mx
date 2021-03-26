
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
// my components
import Button from 'components/Button'
import NavbarItems from 'config/navbar-items.json'

export default function Navbar () {
  const [isActive, setIsActive] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()
  useEffect(() => {
    setIsLoggedIn(!!window?.sessionStorage?.getItem('token'))
  })

  const signOut = () => {
    window.sessionStorage.removeItem('token')
    setIsLoggedIn(false)
    router.push('/login')
  }

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-container is-flex'>
        <div className='navbar-brand'>
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
            }}
            role='button'
            className={classNames(
              'navbar-burger',
              'burger',
              {
                'is-active': isActive
              }
            )}
            aria-label='menu'
            aria-expanded='false'
          >
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>
        <div className={classNames(
          'navbar-menu',
          {
            'is-active': isActive
          }
        )}
        >
          <div className='navbar-end'>
            <div className='navbar-item'>
              {
                NavbarItems.map(({ name, href, onlyLoggedIn }, index) => (
                  <Link href={href} key={index}>
                    <a className={classNames(
                      'navbar-item',
                      { 'is-hidden': onlyLoggedIn && !isLoggedIn }
                    )}
                    >
                      {name}
                    </a>
                  </Link>
                ))
              }
            </div>
            <div className='btns'>
              <div className='btn-sign-in'>
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
              <div className='btn-apply'>
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
