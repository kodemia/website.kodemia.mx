
import React, { useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
// my components
import Button from './Button'
import NavbarItems from '../config/navbar-items.json'

export default function Navbar () {
  const [isActive, setIsActive] = useState(false)
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='container'>
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
            className={classNames('navbar-burger', 'burger', { 'is-active': isActive })}
            aria-label='menu'
            aria-expanded='false'
          >
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>
        <div className={classNames('navbar-menu', { 'is-active': isActive })}>
          <div className='navbar-end'>
            <div className='navbar-item'>
              {
                NavbarItems.map(({ name, href }, index) => (
                  <Link href={href} key={index}>
                    <a className='navbar-item'>
                      {name}
                    </a>
                  </Link>
                ))
              }
            </div>
            <div className='btns'>
              <div className='btn-sign-in'>
                <Button label='Iniciar sesión' link='/login' />
              </div>
              <div className='btn-apply'>
                <Button isPrimary label='Aplica hoy' link='aplica' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
};
