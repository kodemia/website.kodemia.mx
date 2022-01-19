
import React from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'

export interface Props {
  isPrimary?: Boolean
  label: string
  icon?: string
  hasWhiteBg?: Boolean
  href?: string
  link?: string
  type?: 'submit'
  isDisabled?: boolean
  onClick?: () => void
}

export default function Button ({
  isPrimary,
  label,
  icon,
  hasWhiteBg,
  href,
  link = '',
  type,
  isDisabled,
  onClick
}: Props) {
  const router = useRouter()
  const btnClass = classNames(
    'bg-transparent',
    'border-solid border-2',
    'cursor-pointer',
    'flex items-center',
    'justify-center',
    'text-base font-medium',
    'py-1 px-2',
    'rounded-small',
    'text-center',
    'transition-all duration-500 ease-in',
    'w-full laptop:w-auto',
    {
      'border-brand-primary hover:bg-brand-primary hover:bg-opacity-75 hover:border-brand-primary hover:border-opacity-75': isPrimary,
      'border-brand-complementary hover:bg-brand-gray hover:border-brand-gray': !isPrimary,
      'bg-white border-white text-black hover:bg-black hover:border-black hover:text-white hover:bg-opacity-100 hover:border-opacity-100': hasWhiteBg,
      'disabled:bg-brand-gray-light disabled:border-transparent disabled:bg-opacity-50 disabled:cursor-wait': isDisabled
    }
  )
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
              className={classNames(
                !!icon
                  ? 'mr-2 w-5'
                  : 'mr-0 w-0'
              )}
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
}
