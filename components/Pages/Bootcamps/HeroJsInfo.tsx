
import React from 'react'
import classNames from 'classnames'

import H2 from 'components/H2'
import H5 from 'components/H5'

export interface Information {
  title: string
  text: string
}

export interface Props {
  bootcamp: {
    title: string
    subtitle: string
    description: string
    information: Array<Information>
  }
}

export default function HeroJsInfo ({ bootcamp }: Props): JSX.Element {
  return (
    <div className='flex flex-col'>
      <div className={classNames(
        'w-full sm:w-1/2 lg:w-1/3'
      )}>
        <H5>
          {bootcamp.subtitle}
        </H5>
        <H2>
          {bootcamp.title}
        </H2>
      </div>
        <p className={classNames(
          'mt-8 mb-2',
          'max-w-[540px] sm:max-w-[336px]',
          'text-brand-gray-light text-base font-medium'
        )}>
          {bootcamp.description}
        </p>
      <div className='w-full'>
        {
          bootcamp.information.map((data, index) => (
            <div
              key={`hero-js-info-${index}`}
              className={classNames(

              )}
            >
              <h6 className={classNames(
                'mt-2',
                'text-brand-complementary text-[15px] md:text-lg font-semibold'
              )}>
                {data.title}
              </h6>
              <p className='text-brand-gray-light text-base'>
                {data.text}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
