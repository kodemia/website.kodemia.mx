
import React from 'react'
import dayjs from 'dayjs'
import Link from 'next/link'
import classNames from 'classnames'

import * as tracker from 'lib/tracker'
import Whatsapp from 'lib/whatsapp'
import socialMedia from 'config/socialMedia'
import { footerLinks } from 'config/pageLinks'
// my-component
import PageSection from 'components/PageSection'
import Button from 'components/Button'


export default function Footer() {

  const whatsappLink = Whatsapp.createLink(Whatsapp.copies.footerButton)

  return (
    <footer>
      <PageSection>
        <img
          src='/icons/kodemia-logo.svg'
          alt='kodemia-logo'
          className='w-44'
        />
        <div className={classNames(
          'mt-10',
          'md:flex md:flex-row-reverse md:justify-between'
        )}>
          <div>
            <Button
              isPrimary label='Mándanos un whatsapp'
              icon='/icons/btn-whatsapp.svg'
              href={whatsappLink}
              onClick={() => tracker.onFooterButtonClicked('Whatsapp')}
            />
            <div className='my-7'>
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
              {footerLinks.map((footerLink, index) => (
                <Link href={footerLink.href} key={`${footerLink.name}-${index}`}>
                  <a>
                    <span className={classNames(
                      'text-base font-medium',
                      'hover:text-brand-primary'
                    )}>
                      {footerLink.name}
                    </span>
                    {
                      (footerLinks.length - 1 !== index) ?
                        ' | ' : ''
                    }
                  </a>
                </Link>
              ))}
            </div>
            <div className={classNames('flex my-8')}>
              {socialMedia.map((socialMedia, index) => (
                <a
                  href={socialMedia.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={() => tracker.onFooterLinkClicked(socialMedia.name)}
                  className='mr-5'
                  key={`${socialMedia.name}-${index}`}
                >
                  <img src={socialMedia.icon} className={classNames(
                    'w-8 sm:w-6',
                    'hover:filter-white-to-cyan'
                  )} />
                </a>
              ))}
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
