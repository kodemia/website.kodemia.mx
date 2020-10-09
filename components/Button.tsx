
import React from 'react';

export interface ButtonProps {
  primary?: boolean;
  label: string;
  icon: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = true,
  label,
  icon = '',
  ...props
}) => {
  const mode = primary ? 'button-primary' : 'button-secondary';
  return (
    <a
      className={`button ${mode} `}
      {...props}
    >
      <img src={icon} className='icon' /> {label}
    </a>
  );
};
