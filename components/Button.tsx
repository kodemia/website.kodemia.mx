
import React from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'

export interface Props {
  isPrimary?: Boolean
  label: string
  icon?: string
  hasWhiteBg?: Boolean
  link?:string
  href?: string
  onClick?: () => void
}

export default function Button ({
  isPrimary,
  label,
  icon,
  link = '',
  href,
  hasWhiteBg
}: Props) {
  const router = useRouter()
  const btnClass = classNames({
    btn: !icon,
    'button-ikon': true,
    'button-primary': isPrimary,
    'button-secondary': !isPrimary,
    'button-white': hasWhiteBg
  })

  return (
    <>
      {href &&
        <a
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className={btnClass}
        >
          <img src={icon} className='ikon' />
          {label}
        </a>}
      {
        !href &&
          <a
            className={btnClass}
            onClick={() => router.push(link)}
          >
            <img src={icon} className='ikon' />
            {label}
          </a>
      }
    </>
  )
};
