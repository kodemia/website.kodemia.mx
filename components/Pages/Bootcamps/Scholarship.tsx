
import React from 'react'
// My components
import Button from '../../Button'
import H2 from '../../H2'
export default function Scholarship () {
  return (
    <section className='columns scholarship '>
      <div className='column is-full is-flex is-justify-content-center scholarship-container '>
        <div className='columns is-multiline scholarship-information'>
          <div className='column is-two-thirds-desktop is-half-tablet info'>
            <H2 whiteText='' cyanText='Aplica por una beca del 5% hasta el 18%' />
            <p className='scholarship-text'>Puedes aplicar a través de una entrevista personalizada, en ella sabrás la resolución de tu solicitud.</p>
          </div>
          <div className='column is-flex is-align-items-center sholarship-button'>
            <Button label='Quiero una beca' isPrimary />
          </div>
        </div>
      </div>

    </section>
  )
}
