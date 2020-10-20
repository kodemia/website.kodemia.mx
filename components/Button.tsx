
import React from 'react'
import classNames from 'classnames'

export interface Props {
  isPrimary?: Boolean
  label: string
  icon?: string
  hasWhiteBg?: Boolean
  onClick?: () => void
}

export default function Button({
  isPrimary,
  label,
  icon,
  hasWhiteBg,
  ...props
}: Props) {
  const btnClass = classNames({
    btn: !icon,
    'button-ikon': true,
    'button-primary': isPrimary,
    'button-secondary': !isPrimary,
    'button-white': hasWhiteBg
  })

  return (
    <a
      className={btnClass}
      {...props}
    >
      <img src={icon} className='ikon' />
      {label}
    </a>
  )
};
