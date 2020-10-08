
import React from 'react';
import '../styles/components/footer.scss'


export interface FooterProps {

}

/**
 * Primary UI component for user interaction
 */
export const Footer: React.FC<FooterProps> = ({ }) => {

  return (
    <footer className='column footer'>
      <div class="column">
        hi
      </div>
      <div class="column">
        Second column
      </div>
      <div>
        hi
      </div>
    </footer>
  );
};
