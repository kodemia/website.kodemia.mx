
import React from 'react'
// My components
import Button from '../../Button'
import H2 from '../../H2'
import DescriptionParagraph from 'components/DescriptionParagraph'

export default function Scholarship() {
  return (
    <section className='columns scholarship '>
      <div className='column is-full is-flex is-justify-content-center scholarship-container '>
        <div className='columns is-multiline scholarship-information'>
          <div className='column is-two-thirds-desktop is-half-tablet info'>
            <H2
              text='Aplica por una beca del 5% hasta el 18%'
              isCyan
            />
            <div className='scholarship-text'>
              <DescriptionParagraph>
                'Puedes aplicar a través de una entrevista personalizada, en ella sabrás la resolución de tu solicitud.'
              </DescriptionParagraph>
            </div>
          </div>
          <div className='column is-flex is-align-items-center scholarship-button'>
            <Button
              label='Quiero una beca'
              href='/aplicar'
              isPrimary
            />
          </div>
        </div>
      </div>
    </section>
  )
}
