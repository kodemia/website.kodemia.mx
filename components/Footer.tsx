
import React from 'react'
import * as dayjs from 'dayjs'
import Link from 'next/link'

import Button from './Button'

export default function Footer () {
  return (
    <footer className='footer'>
      <div className='first-container'>
        <img src='/icons/Kodemia-logo-01.svg' alt='kodemia-logo' className='logo' />
        <div className='buttons'>
          <div className='btn-whats'>
            <Button
              isPrimary label='Mándanos un whatsapp'
              icon='/icons/Button-Whatsapp.svg' hasWhiteBg={false}
            />
          </div>
          <div className='btn-telegram'>
            <Button
              isPrimary={false} label='Únete a la comunidad'
              icon='/icons/Button-Telegram.svg' hasWhiteBg={false}
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
              rel='noopener'
              className='item-sm'
            >
              <img src='/icons/Social-media-fb.svg' />
            </a>

            <a
              href='https://www.instagram.com/kodemiamx'
              rel='noopener'
              className='item-sm'
            >
              <img src='/icons/Social-media-insta.svg' />
            </a>
            <a
              href='https://twitter.com/kodemiamx'
              rel='noopener'
              className='item-sm'
            >
              <img src='/icons/Social-media-tw.svg' />
            </a>
            <a
              href='https://github.com/kodemia'
              rel='noopener'
              className='item-sm'
            >
              <img src='/icons/Social-media-gh.svg' />
            </a>
            <a
              href='https://medium.com/kodemia'
              rel='noopener'
              className='item-sm'
            >
              <img src='/icons/Social-media-medium.svg' />
            </a>
            <a
              href='https://www.youtube.com/channel/UCjCo9gdMQdebs95zcufryaQ'
              rel='noopener'
              className='item-sm'
            >
              <img src='/icons/Social-media-yt.svg' />
            </a>
            <a
              href='https://www.linkedin.com/company/kodemiamx'
              rel='noopener'
              className='item-sm'
            >
              <img src='/icons/Social-media-in.svg' />
            </a>
          </div>
        </div>
        <div className='contact'>
          <p>Teléfono: 55 3731 72 66</p>
          <p>Email: contacto@kodemia.mx</p>
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
    </footer>
  )
}
