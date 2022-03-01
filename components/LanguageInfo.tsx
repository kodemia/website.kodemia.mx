
import React from 'react'
import classNames from 'classnames'

import H3 from 'components/H3'
import H5 from 'components/H5'

export interface Props {
  name: string
  language: string
  description: string
  duration: string
}

export default function LanguageInfo ({ name, language, description, duration }: Props):JSX.Element {
  return (
    <div className={classNames(
      'my-5 mr-2 ml-0',
      'w-full md:w-1/2 lg:w-full',
    )}>
      <div className='w-full lg:w-48'>
        <H3
          whiteText={name}
          cyanText={language}
        />
      </div>
      <p className={classNames(
        'my-8 mx-0',
        'text-brand-gray text-base font-medium'
      )}>
        {description}
      </p>
      <div className='flex'>
        <div className='w-auto'>
          <img
            src='/icons/icon-calendario.svg'
            className={classNames(
              'mr-4',
              'row-start-1 row-end-3',
              'w-7'
            )}
          />
        </div>
        <div className={classNames(
          'flex flex-col',
          'w-4/5'
        )}>
          <H5 isWhite> Duración </H5>
          <p className='text-brand-gray text-base font-medium'> {duration} </p>
        </div>
      </div>
    </div>
  )
}
