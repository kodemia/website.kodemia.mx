
import React from 'react';
import { Primary } from '../stories/Button.stories';

export interface ButtonProps {
<<<<<<< HEAD
  primary?: boolean;
  label: string;
  icon: string;
=======

  type: string,
  label: string,
  icon: string
>>>>>>> button-component
  onClick?: () => void;

}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
<<<<<<< HEAD
  primary = true,
  label,
  icon = '',
=======
  type = 'primary',
  label,
  icon,
>>>>>>> button-component
  ...props
}) => {

  let button = icon ? 'button-icon' : 'button'

  console.log(type)
  return (

    <a
      className={`${button} button-${type.toLowerCase()} `}
      {...props}
    >
<<<<<<< HEAD
      <img src={icon} className='icon' /> {label}
=======
      <img src={icon} className='icon' />
      {label}
>>>>>>> button-component
    </a>

  );
};
