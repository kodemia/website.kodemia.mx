
import React from 'react'
// My components
import H2 from 'components/H2'
import Button from 'components/Button'

export default function CollaborateWithKodemia () {
  return (
    <section className='columns is-flex is-justify-content-center collaborate-with-kodemia'>
      <div className='column section-container collaborate-data'>
        <div className='collaborate-title'>
          <H2
            whiteText='Colabora con'
            cyanText='Kodemia'
          />
        </div>
        <p className='collaborate-text'>
          Sé parte de las actividades, contenido y eventos de Kodemia. Interactúa con la comunidad, platica de tu proyecto, tu experiencia y súmate a crear contenido de calidad.
        </p>
        <div className='collaborate-button'>
          <Button
            label='Contáctanos'
            isPrimary
            link='#'
          />
        </div>
      </div>
    </section>
  )
}
