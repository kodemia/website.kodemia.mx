
import React from 'react'

import Button from 'components/Button'
import H2 from 'components/H2'
import Text from 'components/Text'

export default function Scholarship () {
  return (
    <section className='columns scholarship '>
      <div className='column is-full is-flex is-justify-content-center scholarship-container '>
        <div className='columns is-multiline scholarship-information'>
          <div className='column is-two-thirds-desktop is-half-tablet info'>
            <H2 isCyan>
              Aplica por una beca del 5% hasta el 18%
            </H2>
            <div className='scholarship-text'>
              <Text>
                'Puedes aplicar a través de una entrevista personalizada, en ella sabrás la resolución de tu solicitud.'
              </Text>
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
