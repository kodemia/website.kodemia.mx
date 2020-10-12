
import React from 'react';
import classNames from 'classnames'

export interface ButtonProps {
  isPrimary: Boolean,
  label: string,
  icon: string,
  hasWhiteBg: Boolean,
  onClick?: () => void;

}

export const Button: React.FC<ButtonProps> = ({
  isPrimary = true,
  label,
  icon,
  hasWhiteBg = false,
  ...props
}) => {

  let btnClass = classNames({
    'button': !icon,
    'button-icon': true,
    'button-primary': isPrimary && !hasWhiteBg,
    'button-secondary': !isPrimary && !hasWhiteBg,
    'button-white': hasWhiteBg
  })

  return (
    <a
      className={btnClass}
      {...props}
    >
      <img src={icon} className='icon' />
      {label}
    </a>
  );
};
