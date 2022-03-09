
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
        'max-w-[205px]',
        'w-full md:w-1/2 lg:w-1/3'
      )}>
        <H5>
          {bootcamp.subtitle}
        </H5>
        <H2>
          {bootcamp.title}
        </H2>
      </div>
      <div className='md:w-3/5 lg:w-1/3'>
        <p className={classNames(
          'my-5 lg:my-8',
          'max-w-[540px] md:max-w-[336px]',
          'text-brand-gray-light text-base font-medium'
        )}>
          {bootcamp.description}
        </p>
      </div>
      <div className='w-full'>
        {
          bootcamp.information.map((data, index) => (
            <div
              key={`hero-js-info-${index}`}
            >
              <h6 className={classNames(
                'mt-3',
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
