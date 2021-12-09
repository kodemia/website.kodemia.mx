
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
    'items-center bg-transparent rounded-small border-solid border-2 text-white cursor-pointer flex text-base font-medium justify-center py-1 px-2 text-center transition-all duration-500 ease-in w-full hover:text-white': !icon,
    'items-center bg-transparent rounded-small border-solid border-2 text-white cursor-pointer flex text-base font-medium justify-center py-1 px-2 text-center transition-all duration-500 ease-in w-full hover:text-white w-3/4 laptop:w-auto': true,
    'border-brand-primary hover:bg-brand-primary hover:opacity-75 hover:border-brand-primary hover:border-opacity-75': isPrimary,
    'border-brand-complementary hover:bg-brand-gray hover:border-brand-gray': !isPrimary,
    'bg-white border-white text-black hover:bg-black hover:border-black hover:text-white hover:opacity-100': hasWhiteBg,
    'disabled:bg-brand-gray-light disabled:border-transparent disabled:opacity-5 disabled:cursor-wait': isDisabled
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
              className={classNames(
                'mr-2',
                'w-5'
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
};
