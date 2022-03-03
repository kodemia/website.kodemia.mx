
import React from 'react'
import classNames from 'classnames'

import PageSection from 'components/PageSection'
import Button from 'components/Button'
import H3 from 'components/H3'
import H5 from 'components/H5'

export interface Data {
  title: string
  keywords: string
  section: string
  text: string
}
export interface Props {
  info: Data
}

export default function KodemiaFinancing ({ info }: Props) {
  return (
    <PageSection
      sectionClassName={classNames(
        'bg-center bg-cover',
        'bg-home-financing-sm md:home-financing-md lg:home-financing-lg'
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
