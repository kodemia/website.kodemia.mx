
import React from 'react'
import classNames from 'classnames'

import Button from 'components/Button'
import H2 from 'components/H2'
import PageSection from 'components/PageSection'
import Text from 'components/Text'

export default function Scholarship (): JSX.Element {
  return (
    <PageSection sectionClassName='bg-brand-black'>
      <div className={classNames(
        'flex items-center',
        'flex-col md:flex-row',
        'md:flex-1',
        'md:gap-x-10 lg:gap-x-14'
      )}>
        <div className={classNames(
          'w-full md:w-1/2 lg:w-2/3'
        )}>
          <H2 isCyan>
            Aplica por una beca del 5% hasta el 18%
          </H2>
          <div className={classNames(
            'my-7',
            'max-w-xl lg:max-w-2xl'
          )}>
            <Text>
              Puedes aplicar a través de una entrevista personalizada, en ella sabrás la resolución de tu solicitud.
            </Text>
          </div>
        </div>
        <div className={classNames(
          'w-full md:w-1/2 lg:w-[340px]'
        )}>
          <Button
            label='Quiero una beca'
            href='/aplicar'
            isPrimary
          />
        </div>
      </div>
    </PageSection>
  )
}
