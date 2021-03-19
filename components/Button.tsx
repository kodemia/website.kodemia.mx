
import React from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'

export interface Props {
  isPrimary?: Boolean
  label: string
  icon?: string
  hasWhiteBg?: Boolean
  link?: string
  href?: string
  type?: 'submit'
  isDisabled?: boolean
  onClick?: () => void
}

export default function Button ({
  isPrimary,
  label,
  icon,
  link = '',
  href,
  hasWhiteBg,
  type,
  isDisabled,
  onClick
}: Props) {
  const router = useRouter()
  const btnClass = classNames({
    btn: !icon,
    'button-ikon': true,
    'button-primary': isPrimary,
    'button-secondary': !isPrimary,
    'button-white': hasWhiteBg,
    'is-loading': isDisabled
  })

  return (
    <>
      {href && type !== 'submit' &&
        <a
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className={btnClass}
        >
          <img src={icon} className='ikon' />
          <span className={classNames({
            'label-ikon': icon
          })}
          >
            {label}
          </span>
        </a>}
      {
        !href && type !== 'submit' &&
          <a
            className={btnClass}
            onClick={onClick || (() => router.push(link))}
          >
            <img src={icon} className='ikon' />
            <span className={classNames({
              'label-ikon': icon
            })}
            >
              {label}
            </span>
          </a>
      }
      {
        type === 'submit' &&
          <input
            type='submit'
            value={label}
            disabled={!!isDisabled}
            className={btnClass}
          />
      }
    </>
  )
};
