import React from 'react'
// My components
import Button from 'components/Button'
import H1 from 'components/H1'

export default function NextDeveloper () {
  return (
    <section className='next-developer'>
      <div className='next-developer-container section-container'>
        <div className='title-container'>
          <H1
            text='¿Listo para encontrar al próximo developer de tu empresa?'
          />
        </div>
        <div className='btn-container'>
          <Button
            label='Contáctanos'
            hasWhiteBg
            link='/empresas/registro'
          />
        </div>
      </div>
    </section>
  )
}
