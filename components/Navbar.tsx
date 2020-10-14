
import React, { useState } from 'react';
import { Button } from './Button'

export interface NavbarProps {

}

export const Navbar: React.FC<NavbarProps> = ({ }) => {
  const [isActive, setisActive] = useState(false)
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a href='/' className='navbar-item'>
          <img
            src='/icons/kodemia-logo-02.svg'
            alt='Logo'
            width='128'
            height='35'
          />
        </a>

        <a
          onClick={() => {
            setisActive(!isActive)
          }}
          role='button'
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <a href='/' className='navbar-item'>
              Bootcamps
            </a>
            <a href='/' className='navbar-item'>
              Empresas
            </a>
            <a href='/' className='navbar-item'>
              FQA
            </a>
            <a href='/' className='navbar-item'>
              Alumnos
            </a>
          </div>
          <div className='btns'>
            <div className='btn-signIn'>
              <Button isPrimary={false} label='Iniciar sesión' />
            </div>
            <div className='btn-apply'>
              <Button isPrimary={true} label='Aplica hoy' /></div>
          </div>
        </div>
      </div>
    </nav>
  );
};
