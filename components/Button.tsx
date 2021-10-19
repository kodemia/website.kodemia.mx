
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

  const onClickButton = onClick ?? (() => link && router.push(link))

  return (
    <>
      {
        type !== 'submit' &&
          <a
            target='_blank'
            rel='noopener noreferrer'
            className={btnClass}
            href={href}
            onClick={onClickButton}
          >
            <img
              src={icon}
              className='ikon'
            />
            {label}
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
