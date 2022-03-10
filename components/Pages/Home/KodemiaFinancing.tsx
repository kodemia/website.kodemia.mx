
import React from 'react'
import classNames from 'classnames'

import Button from 'components/Button'
import H3 from 'components/H3'
import H5 from 'components/H5'
import PageSection from 'components/PageSection'

export interface Data {
  title: string
  keywords: string
  section: string
  text: string
}
export interface Props {
  info: Data
}

export default function KodemiaFinancing ({ info }: Props): JSX.Element {
  return (
    <PageSection
      sectionClassName={classNames(
        'bg-cover bg-no-repeat',
        'bg-home-financing-sm md:bg-home-financing-md lg:bg-home-financing-lg'
      )}
      contentClassName='md:flex md:justify-start'
    >
      <div className='md:w-1/2'>
        <H5>
          {info.section}
        </H5>
        <div className='lg:w-80'>
          <H3
            whiteText={info.title}
            cyanText={info.keywords}
          />
        </div>
        <p className='my-10'>
          {info.text}
        </p>
        <div className='lg:w-80'>
          <Button
            label='Conoce más'
            isPrimary
            link='/aplicar'
          />
        </div>
      </div>
    </PageSection>
  )
}
