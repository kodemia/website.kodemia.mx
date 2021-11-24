
import React from 'react'
import classNames from 'classnames'
// My component
import H3 from '../../H3'
import H5 from '../../H5'
import Button from '../../Button'

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
    <section className={classNames(
      'mob:bg-financing-mobile tablet:bg-financing-tablet laptop:bg-financing-desktop',
      'bg-cover bg-no-repeat',
      'mob:bg-center laptop:bg-left-top',
      'mob:flex mob:justify-center tablet:justify-start laptop:justify-center',
      'mob:py-0 mob:px-11 tablet:px-20 laptop:px-0',
      'mob:w-full'
    )}
    >
      <div className={classNames(
        'flex flex-col justify-center',
        'mob:m-0 laptop:mx-20',
        'mob:max-w-full tablet:max-w-md laptop:max-w-content',
        'mob:min-w-full laptop:min-w-content',
        'mob:pt-20 mob:px-0 mob:pb-16',
        'tablet:pt-24 tablet:pb-20',
        'mob:w-full tablet:w-1/2 laptop:w-full'
      )}
      >
        <H5>
          {info.section}
        </H5>
        <div className={classNames(
          'mob:w-full laptop:w-300px'
        )}
        >
          <H3
            whiteText={info.title}
            cyanText={info.keywords}
          />
        </div>
        <p className={classNames(
          'text-base font-medium',
          'mt-8 mx-0 mb-9',
          'max-w-730'
        )}
        >
          {info.text}
        </p>
        <div className={classNames(
          'mob:max-w-full laptop:max-w-screen-mob',
          'mob:w-full laptop:w-1/3'
        )}
        >
          <Button
            label='Conoce más'
            isPrimary
            link='/aplicar'
          />
        </div>
      </div>
    </section>
  )
}
