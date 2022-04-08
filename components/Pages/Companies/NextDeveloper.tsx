
import React from 'react'
import classNames from 'classnames'

import Button from 'components/Button'
import H2 from 'components/H2'
import PageSection from 'components/PageSection'

export default function NextDeveloper (): JSX.Element {
  return (
    <PageSection
      sectionClassName='bg-brand-primary-dark'
      contentClassName={classNames(
        'flex',
        'flex-col md:flex-row',
        'items-start md:items-center',
        'h-80',
        'justify-center lg:justify-between'
      )}
    >
        <div className={classNames(
          'md:max-w-[350px] lg:max-w-screen-sm',
          'w-full md:w-3/5'
        )}>
          <H2>
            ¿Listo para encontrar al próximo developer de tu empresa?
          </H2>
        </div>
        <div className={classNames(
          'mt-14 md:mt-0',
          'w-full md:w-1/2 lg:w-[340px]'
        )}>
          <Button
            label='Contáctanos'
            hasWhiteBg
            link='/empresas/registro'
          />
        </div>
    </PageSection>
  )
}
