import React from 'react'

import Button from 'components/Button'
import H2 from 'components/H2'

export default function TransformYourLife () {
  return (
    <section className='transform-your-life'>
      <div className='transform-your-life-container section-container'>
        <div className='title-container'>
          <H2>
            ¿Listo para transformar tu vida programando?
          </H2>
        </div>
        <div className='btn-container'>
          <Button
            label='Aplica ahora'
            hasWhiteBg
            link='/aplicar'
          />
        </div>
      </div>
    </section>
  )
}
