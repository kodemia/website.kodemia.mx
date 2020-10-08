//ToDo: delete (It's only a example)
import React from 'react';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  label,
  ...props
}) => {
  const mode = primary ? 'button-primary' : 'button-secondary';
  return (
    <a
      className={`button ${mode} `}
      {...props}
    >
      {label}
    </a>
  );
};
