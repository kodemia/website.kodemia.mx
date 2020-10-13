
import React from 'react'
import * as dayjs from 'dayjs'
import Link from 'next/link'

import { Button } from './Button'

// ToDo: quitar, solo se usa para storybook
export interface FooterProps {

}
export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <img src='/icons/Kodemia-logo-01.svg' alt='kodemia-logo' className='logo' />
        <div className="buttons">
          <Button isPrimary={true} label='Mándanos un whatsapp'
            icon='/icons/Button-Whatsapp.svg' hasWhiteBg={false} />
          <Button isPrimary={false} label='Únete a la comunidad'
            icon='/icons/Button-Telegram.svg' hasWhiteBg={false} />
        </div>
        <div className="directory">
          <div className='navigation'>
            <Link href='/'>
              <a>Programas | </a>
            </Link>
            <Link href='/'>
              <a>Empresas | </a>
            </Link>
            <Link href='/'>
              <a>FAQ | </a>
            </Link>
            <Link href='/'>
              <a>Alumnos </a>
            </Link>
          </div>
          <div className='social-media'>
            <a
              href='https://www.facebook.com/kodemiamx'
              target='_blank'
            >
              <img src='/icons/Social-media-fb.svg' />
            </a>
            <a
              href='https://www.instagram.com/kodemiamx'
              target='_blank'
            >
              <img src='/icons/Social-media-insta.svg' />
            </a>
            <a
              href='https://twitter.com/kodemiamx'
              target='_blank'
            >
              <img src='/icons/Social-media-tw.svg' />
            </a>
            <a
              href='https://github.com/kodemia'
              target='_blank'
            >
              <img src='/icons/Social-media-gh.svg' />
            </a>
            <a href='https://medium.com/kodemia'
              target='_blank'
            >
              <img src='/icons/Social-media-medium.svg' />
            </a>
            <a href='https://www.youtube.com/channel/UCjCo9gdMQdebs95zcufryaQ'
              target='_blank'
            >
              <img src='/icons/Social-media-yt.svg' />
            </a>
            <a href='https://www.linkedin.com/company/kodemiamx'
              target='_blank'
            >
              <img src='/icons/Social-media-in.svg' />
            </a>
          </div>
        </div>
        <div className="contact">
          <p>Teléfonos 55 3731 72 66</p>
          <p>Email: contacto@kodemia.mx</p>
        </div>
        <p className='address'>
          Tonalá 10, Roma Norte, Cuauhtémoc, <br /> 03800 Ciudad de México, CDMX
        </p>
      </div>
      <div className="copyright-container">
        <p>
          Kodemia© {dayjs().format('YYYY')}. Todos los  derechos reservados
        </p>
        <a href='#' className='privacy'>
          Aviso de Privacidad
        </a>
      </div>
    </footer>
  )
};
