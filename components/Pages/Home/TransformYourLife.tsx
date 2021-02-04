import React from 'react'
// My components
import Button from '../../Button'
import H1 from '../../H1'

export default function TransformYourLife() {
  return (
    <section className='transform-your-life'>
      <div className='transform-your-life-container section-container'>
        <div className='title-container'>
          <H1 text='¿Listo para transformar tu vida programando?' />
        </div>
        <div className='btn-container'>
          <Button label='Aplica ahora' hasWhiteBg link='/aplicar' />
        </div>
      </div>
    </section>
  )
}
