
import React from 'react'
import classNames from 'classnames'

import H3 from 'components/H3'
import H5 from 'components/H5'

export interface Props {
  name: string,
  language: string,
  description: string,
  duration: string,
}

export default function LanguageCard ({
  name,
  language,
  description,
  duration
}: Props):JSX.Element {
  return (
    <div className={classNames(
      // 'language-card'
      'my-5',
      'mr-2', // TODO: Comprobar comportamiento, en CSS esta en 10px
      'ml-0',
      'max-w-full md:max-w-[50%]',
      'min-w-full lg:min-w-[250px]'
    )}>
      <div className={classNames(
        // 'principal-title'
        'max-w-[50%]',
        'md:max-w-full',
        'lg:max-w-[190px]'
      )}>
        <H3
          whiteText={name}
          cyanText={language}
        />
      </div>
      <p className={classNames(
        // 'description'
        'text-brand-gray',
        'text-base',
        'font-medium',
        'my-8 mx-0'
      )}>
        {description}
      </p>
      <div className={classNames(
        // 'duration-container'
        'flex',
      )}>
        <div className={classNames(
          'w-auto',
          ''
        )}>
          <img
            src='/icons/icon-calendario.svg'
            className={classNames(
              // 'calendar-icon'
              'row-start-1 row-end-3',
              'mr-4', // TODO: Comprobar comportamiento, en CSS esta en 15px
              'w-[26px]'
            )}
          />
        </div>
        <div className={classNames(
          'flex',
          'flex-col',
          'w-4/5'
        )}>
          <H5 isWhite>
            Duración
          </H5>
          <p className={classNames(
            // 'duration'
            'text-brand-gray',
            'text-base',
            'font-medium'
          )}>
            {duration}
          </p>
        </div>
      </div>
    </div>
  )
}
