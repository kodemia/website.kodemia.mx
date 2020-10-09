
import React from 'react'
import * as dayjs from 'dayjs'
import Link from 'next/link'

import { Button } from './Button'

// ToDo: quitar, solo se usa para storybook
export interface FooterProps {

}
export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className=' footer'>
      <img src='kodemia-logo-white.png' alt='kodemia-logo' />
      <div className='container'>
        <div className='directory'>
          <ul className='navigation'>
            <li>
              <Link href='/'>
                <a>Programas | </a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Empresas | </a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>FAQ | </a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Alumnos </a>
              </Link>
            </li>
          </ul>
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
            <a href='https://medium.com/kodemia'>
              <img src='/icons/Social-media-medium.svg' />
            </a>
            <a href='https://www.youtube.com/channel/UCjCo9gdMQdebs95zcufryaQ'>
              <img src='/icons/Social-media-yt.svg' />
            </a>
            <a href='https://www.linkedin.com/company/kodemiamx'>
              <img src='/icons/Social-media-in.svg' />
            </a>
          </div>
        </div>
        <div className='info-contact'>
          <Button label='Mándanos un whatsapp' icon='/icons/Button-Whatsapp.svg' />
          <Button primary={false} label='Únete a la comunidad' icon='/icons/Button-Telegram.svg' />
        </div>
      </div>
      <div className='info-kodemia'>
        <p className='address'>Tonalá 10, Roma Norte,Cuauhtémoc, <br /> 03800 Ciudad de México, CDMX
          </p>
        <div className='contact'>
          <p>Teléfonos 55 3731 72 66</p>
          <p>Email: contacto@kodemia.mx</p>
        </div>
      </div>
      <div className='legal'>
        <p>Kodemia© {dayjs().format('YYYY')}. Todos los dereechos reservados </p>
        <a href='#'>Aviso de Privacidad</a>
      </div>
    </footer>
  )
};
