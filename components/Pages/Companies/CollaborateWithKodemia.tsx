
import React from 'react'
// My components
import H3 from 'components/H3'
import Button from 'components/Button'
import DescriptionParagraph from 'components/DescriptionParagraph'

export default function CollaborateWithKodemia () {
  return (
    <section className='columns is-flex is-justify-content-center collaborate-with-kodemia'>
      <div className='column section-container collaborate-data'>
        <div className='collaborate-title'>
          <H3
            whiteText='Colabora con'
            cyanText='Kodemia'
          />
        </div>
        <div className='collaborate-text'>
          <DescriptionParagraph>
            Sé parte de las actividades, contenido y eventos de Kodemia. Interactúa con la comunidad, platica de tu proyecto, tu experiencia y súmate a crear contenido de calidad.
          </DescriptionParagraph>
        </div>
        <div className='collaborate-button'>
          <Button
            label='Contáctanos'
            isPrimary
            link='/empresas/registro'
          />
        </div>
      </div>
    </section>
  )
}
