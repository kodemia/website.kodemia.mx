
import classNames from 'classnames'

import Button from 'components/Button'
import Cursor from 'components/TextCursor'

export default function EndTrialPeriod () {
  return (
    <div className={classNames(
      'flex flex-col',
      'px-4 md:px-11 lg:px-4',
      'overflow-hidden',
      'h-screen w-screen'
    )}
    >
      <div className={classNames(
        'bg-gray-kd-dark',
        'flex flex-col items-center',
        'self-center',
        'mt-24',
        'p-9 md:p-16',
        'rounded-gray-card',
        'text-center',
        'w-full lg:w-1/2'
      )}
      >
        <h1 className='text-h1 leading-h1 font-semibold'>
          <span className='text-cyan-kd'>¡Ups,</span><br /> el tiempo de prueba<br /><span className='text-cyan-kd'>se acabó</span><Cursor>!</Cursor>
        </h1>
        <p className={classNames(
          'mt-8',
          'mb-8',
          'text-lg leading-6',
          'text-gray-kd-lighter'
        )}
        >
          Pero aún estás a tiempo de formar parte de la siguiente generación.
        </p>
        <Button
          isPrimary
          label='Quiero aplicar al Bootcamp'
          link='/aplicar'
        />
      </div>
    </div>
  )
}
