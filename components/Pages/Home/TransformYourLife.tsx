
import React from 'react'
import classNames from 'classnames'
// My components
import Button from '../../Button'
import H2 from '../../H2'

export default function TransformYourLife () {
  return (
    <section className={classNames(
      'bg-cyan-kd-dark',
      'flex laptop:justify-center',
      'laptop: w-full'
    )}
    >
      <div className={classNames(
        'mob:items-start laptop:items-center',
        'flex mob:flex-col laptop:flex-row',
        'mob:justify-center laptop:justify-between',
        'mob:m-0 laptop:mx-20',
        'mob:max-w-full tablet:max-w-md laptop:max-w-content',
        'mob:min-w-full laptop:min-w-content',
        'mob:pt-20 mob:px-11 mob:pb-16',
        'tablet:pt-24 tablet:px-20 tablet:pb-20',
        'laptop:px-0',
        'mob:w-full'
      )}
      >
        <div className={classNames(
          'mob:max-w-400px',
          'mob:w-full tablet:w-55% laptop:w-full'
        )}
        >
          <H2>
            ¿Listo para transformar tu vida programando?
          </H2>
        </div>
        <div className={classNames(
          'mob:mt-14 laptop:mt-0',
          'mob:w-full tablet:w-45% laptop:w-330px'
        )}
        >
          <Button
            label='Aplica ahora'
            hasWhiteBg
            link='/aplicar'
          />
        </div>
      </div>
    </section>
  )
}
