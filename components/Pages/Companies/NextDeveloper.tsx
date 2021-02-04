import React from 'react'
// My components
import Button from '../../Button'
import H2 from '../../H2'

export default function NextDeveloper () {
  return (
    <section className='next-developer'>
      <div className='next-developer-container section-container'>
        <div className='title-container'>
          <H2
            whiteText='¿Listo para encontrar al próximo developer de tu empresa?' cyanText=''
            isFirstCyan
          />
        </div>
        <div className='btn-container'>
          <Button
            label='Contáctanos'
            hasWhiteBg
            link='#'
          />
        </div>
      </div>
    </section>
  )
}
