
import React from 'react';


export interface ButtonProps {

  type: string,
  label: string,
  icon: string
  onClick?: () => void;

}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  label,
  icon,
  ...props
}) => {

  let button = icon ? 'button-icon' : 'button'

  console.log(type)
  return (

    <a
      className={`${button} button-${type.toLowerCase()} `}
      {...props}
    >
      <img src={icon} className='icon' />
      {label}
    </a>

  );
};