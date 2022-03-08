
import React from 'react'
import classNames from 'classnames'

import Button from 'components/Button'
import H3 from 'components/H3'
import PageSection from 'components/PageSection'
import Text from 'components/Text'

export default function CollaborateWithKodemia () {
  return (
    <PageSection
      sectionClassName={classNames(
        'bg-companies-collaborate-sm md:bg-companies-collaborate-md lg:bg-companies-collaborate-lg',
        'bg-cover bg-center bg-no-repeat'
      )}
    >
      <div className={classNames(
        'max-w-xs lg:max-w-none'
      )}>
        <H3
          whiteText='Colabora con'
          cyanText='Kodemia'
        />
      </div>
      <div className={classNames(
        'my-7',
        'lg:max-w-[715px]',
        'w-full md:w-1/2'
      )}>
        <Text>
          Sé parte de las actividades, contenido y eventos de Kodemia. Interactúa con la comunidad, platica de tu proyecto, tu experiencia y súmate a crear contenido de calidad.
        </Text>
      </div>
      <div className={classNames(
        'w-full md:w-1/2 lg:w-[340px]'
      )}>
        <Button
          label='Contáctanos'
          isPrimary
          link='/empresas/registro'
        />
      </div>
    </PageSection>
  )
}
