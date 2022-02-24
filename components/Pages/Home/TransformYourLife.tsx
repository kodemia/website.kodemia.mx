import React from 'react'
import ClassNames from 'classnames'
// My components
import PageSection from 'components/PageSection'
import Button from 'components/Button'
import H2 from 'components/H2'

export default function TransformYourLife () {
  return (
    <section>
      <PageSection
        sectionClassName='bg-brand-primary-dark'
        contentClassName='md:flex md:justify-between md:items-center '
      >
        <div className={ClassNames(
          'text-center md:text-left',
          'mb-10 md:mb-0 md:pb-4 md:w-2/5'
        )}>
          <H2>
            ¿Listo para transformar tu vida programando?
          </H2>
        </div>
        <div className={ClassNames(
          'mb-10 md:mb-0',
          'md:w-2/4 lg:max-w-xs'
        )}>
          <Button
            label='Aplica ahora'
            hasWhiteBg
            link='/aplicar'
          />
        </div>
      </PageSection>
    </section>
  )
}
