
import React from 'react'
import dayjs from 'dayjs'
import Link from 'next/link'
import classNames from 'classnames'

import * as tracker from 'lib/tracker'
import Whatsapp from 'lib/whatsapp'

// my-component
import PageSection from 'components/PageSection'
import Button from 'components/Button'

export default function Footer() {
  const menuLinks = [['Programas', '/#bootcamps'],['Empresas', '/empresas'], ['Alumnos', '/logins']]å
  const whatsappLink = Whatsapp.createLink(Whatsapp.copies.footerButton)
  const iconClasses = classNames('w-8 sm:w-6 hover:filter-white-to-cyan')
  const linkClasses = classNames('text-base font-medium hover:text-brand-primary')

  return (
    <footer>
      <PageSection>
        <img
          src='/icons/kodemia-logo.svg'
          alt='kodemia-logo'
          className={classNames('w-44')}
        />
        <div className={classNames(
          'mt-10',
          'md:flex md:flex-row-reverse md:justify-between'
        )}>
          <div >
            <div >
              <Button
                isPrimary label='Mándanos un whatsapp'
                icon='/icons/btn-whatsapp.svg'
                href={whatsappLink}
                onClick={() => tracker.onFooterButtonClicked('Whatsapp')}
              />
            </div>
            <div className={classNames('my-7')}>
              <Button
                label='Únete a la comunidad'
                icon='/icons/btn-telegram.svg'
                href='https://t.me/kodemiadevs'
                onClick={() => tracker.onFooterButtonClicked('Telegram')}
              />
            </div>
          </div>
          <div className={classNames(
            'flex flex-col items-center',
            'md:items-start md:justify-between'
          )}>
            <div>
              {menuLinks.map(([title, url],index) => (
                <Link href={url}>
                  {( index !== menuLinks.length-1)?
                   <a><span className={linkClasses}>{title}</span> | </a> : 
                    <a><span className={linkClasses}>{title}</span> </a>
                  } 
                </Link>
              ))}
            </div>
            <div className={classNames('flex my-8')}>
              <a
                href='https://www.facebook.com/kodemiamx'
                target='_blank'
                rel='noopener noreferrer'
                onClick={() => tracker.onFooterLinkClicked('Facebook')}
              >
                <img src='/icons/social-media-fb.svg' className={iconClasses} />
              </a>

              <a
                href='https://www.instagram.com/kodemiamx'
                target='_blank'
                rel='noopener noreferrer'
                onClick={() => tracker.onFooterLinkClicked('Instagram')}
                className={classNames('ml-5')}
              >
                <img src='/icons/social-media-insta.svg' className={iconClasses} />
              </a>
              <a
                href='https://twitter.com/kodemiamx'
                target='_blank'
                rel='noopener noreferrer'
                onClick={() => tracker.onFooterLinkClicked('Twitter')}
                className={classNames('ml-5')}
              >
                <img src='/icons/social-media-tw.svg' className={iconClasses} />
              </a>
              <a
                href='https://github.com/kodemia'
                target='_blank'
                rel='noopener noreferrer'
                onClick={() => tracker.onFooterLinkClicked('GitHub')}
                className={classNames('ml-5')}
              >
                <img src='/icons/social-media-gh.svg' className={iconClasses} />
              </a>
              <a
                href='https://medium.com/kodemia'
                target='_blank'
                rel='noopener noreferrer'
                onClick={() => tracker.onFooterLinkClicked('Medium')}
                className={classNames('ml-5')}
              >
                <img src='/icons/social-media-medium.svg' className={iconClasses} />
              </a>
              <a
                href='https://www.youtube.com/channel/UCjCo9gdMQdebs95zcufryaQ'
                target='_blank'
                rel='noopener noreferrer'
                onClick={() => tracker.onFooterLinkClicked('YouTube')}
                className={classNames('ml-5')}
              >
                <img src='/icons/social-media-yt.svg' className={iconClasses} />
              </a>
              <a
                href='https://www.linkedin.com/company/kodemiamx'
                target='_blank'
                rel='noopener noreferrer'
                onClick={() => tracker.onFooterLinkClicked('LinkedIn')}
                className={classNames('ml-5')}
              >
                <img src='/icons/social-media-in.svg' className={iconClasses} />
              </a>
            </div>
          </div>
        </div>
        <div className={classNames('md:flex md:flex-row-reverse md:justify-between')}>
          <div className={classNames(
            'flex flex-col',
            'items-center md:items-end'
          )}>
            <p>
              <a
                href='tel:+52 55 5015 0517'
                onClick={() => tracker.onFooterLinkClicked('Phone')}
              >
                +52 55 5015 0517
              </a>
            </p>
            <p>
              <a
                href='tel:01 800 212 0022'
                onClick={() => tracker.onFooterLinkClicked('01800 Phone')}
              >
                01 800 212 0022
              </a>
            </p>
            <p>
              <a
                href='mailto:info@kodemia.mx'
                onClick={() => tracker.onFooterLinkClicked('EMail')}
              >
                info@kodemia.mx
              </a>
            </p>
          </div>

          <p className={classNames(
            'mt-5',
            'flex flex-col',
            'text-center md:text-left'
          )}>
            Tonalá 10, Roma Norte, Cuauhtémoc, <br /> 03800 Ciudad de México, CDMX
          </p>
        </div>
        <div className={classNames(
          'mt-5',
          'border-t-2 border-solid border-brand-complementary',
          'flex flex-col items-center',
          'md:flex-row md:justify-between'
        )}>
          <p className={classNames('my-5 text-center')}>
            Kodemia© {dayjs().format('YYYY')}. Todos los  derechos reservados
          </p>
          <Link
            href='/politica-de-privacidad'
          >
            <a>
              Aviso de Privacidad
            </a>
          </Link>
        </div>
      </PageSection>
    </footer>
  )
}
