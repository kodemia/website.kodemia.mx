import React from 'react'
import dayjs from 'dayjs'
import Link from 'next/link'

import Button from './Button'

export default function Footer () {
  return (
    <footer className='my-footer'>
      <div className='wrapper-f'>
        <div className='first-container'>
          <img src='/icons/Kodemia-logo-01.svg' alt='kodemia-logo' className='logo' />
          <div className='buttons'>
            <div className='btn-whats'>
              <Button
                isPrimary label='Mándanos un whatsapp'
                icon='/icons/button-whatsapp.svg'
              />
            </div>
            <div className='btn-telegram'>
              <Button
                label='Únete a la comunidad'
                icon='/icons/button-telegram.svg'
              />
            </div>
          </div>
          <div className='directory'>
            <div className='navigation'>
              <Link href='/'>
                <a><span className='item-nav'>Programas</span> | </a>
              </Link>
              <Link href='/'>
                <a><span className='item-nav'>Empresas</span> | </a>
              </Link>
              <Link href='/'>
                <a><span className='item-nav'>FAQ</span> | </a>
              </Link>
              <Link href='/'>
                <a><span className='item-nav'>Alumnos</span> </a>
              </Link>
            </div>
            <div className='social-media'>
              <a
                href='https://www.facebook.com/kodemiamx'
                target='_blank'
                rel='noopener noreferrer'

                className='item-sm'
              >
                <img src='/icons/social-media-fb.svg' />
              </a>

              <a
                href='https://www.instagram.com/kodemiamx'
                target='_blank'
                rel='noopener noreferrer'
                className='item-sm'
              >
                <img src='/icons/social-media-insta.svg' />
              </a>
              <a
                href='https://twitter.com/kodemiamx'
                target='_blank'
                rel='noopener noreferrer'
                className='item-sm'
              >
                <img src='/icons/social-media-tw.svg' />
              </a>
              <a
                href='https://github.com/kodemia'
                target='_blank'
                rel='noopener noreferrer'
                className='item-sm'
              >
                <img src='/icons/social-media-gh.svg' />
              </a>
              <a
                href='https://medium.com/kodemia'
                target='_blank'
                rel='noopener noreferrer'
                className='item-sm'
              >
                <img src='/icons/social-media-medium.svg' />
              </a>
              <a
                href='https://www.youtube.com/channel/UCjCo9gdMQdebs95zcufryaQ'
                target='_blank'
                rel='noopener noreferrer'
                className='item-sm'
              >
                <img src='/icons/social-media-yt.svg' />
              </a>
              <a
                href='https://www.linkedin.com/company/kodemiamx'
                target='_blank'
                rel='noopener noreferrer'
                className='item-sm'
              >
                <img src='/icons/social-media-in.svg' />
              </a>
            </div>
          </div>
          <div className='contact'>
            <p>
              Teléfono: 
              <a href="tel:55 3731 72 66">
                55 3731 72 66
              </a>
            </p>
            <p>
              Email: 
              <a href="mailto:contacto@kodemia.mx">
                contacto@kodemia.mx
              </a>
            </p>
          </div>
          <p className='address'>
            Tonalá 10, Roma Norte, Cuauhtémoc, <br /> 03800 Ciudad de México, CDMX
          </p>
        </div>
        <div className='copyright-container'>
          <p>
            Kodemia© {dayjs().format('YYYY')}. Todos los  derechos reservados
          </p>
          <a href='#' className='privacy'>
            Aviso de Privacidad
          </a>
        </div>
      </div>
    </footer>
  )
}
