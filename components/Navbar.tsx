
import React, { useState } from 'react'
import Link from 'next/link'
// my components
import Button from './Button'

export default function Navbar() {
  const [isActive, setisActive] = useState(false)
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link href='/'>
          <a className='navbar-item'>
            <img
              src='/icons/kodemia-logo-02.svg'
              alt='Logo'
              width='128'
              height='35'
            />
          </a>
        </Link>

        <a
          onClick={() => {
            setisActive(!isActive)
          }}
          role='button'
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
        >
          <span aria-hidden='true' />
          <span aria-hidden='true' />
          <span aria-hidden='true' />
        </a>
      </div>
      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <Link href='/'>
              <a className='navbar-item'>
                Bootcamps
              </a>
            </Link>
            <Link href='/'>
              <a className='navbar-item'>
                Empresas
              </a>
            </Link>
            <Link href='/'>
              <a className='navbar-item'>
                FQA
              </a>
            </Link>
            <Link href='/'>
              <a className='navbar-item'>
                Alumnos
              </a>
            </Link>
          </div>
          <div className='btns'>
            <div className='btn-sign-in'>
              <Button isPrimary={false} label='Iniciar sesión' />
            </div>
            <div className='btn-apply'>
              <Button isPrimary label='Aplica hoy' />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
};
