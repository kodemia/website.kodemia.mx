
import React from 'react';
import classNames from 'classnames'

type Props = {
  isPrimary: Boolean,
  label: string,
  icon: string,
  hasWhiteBg: Boolean,
  onClick?: () => void;

}

export default function Button({
  isPrimary = true,
  label,
  icon,
  hasWhiteBg = false,
  ...props
}: Props) {

  let btnClass = classNames({
    'btn': !icon,
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
  );
};
