
import classNames from 'classnames'

import Button from 'components/Button'
import Cursor from 'components/TextCursor'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'

export default function EndTrialPeriod () {
  return (
    <>
    <Navbar />
    <div className={classNames(
      'bg-black-kd',
      'flex flex-col',
      'px-5 md:px-11 lg:px-4',
      'overflow-hidden',
      'h-screen w-screen'
    )}
    >
      <div className={classNames(
        'bg-gray-kd-dark',
        'flex flex-col items-center',
        'self-center',
        'mt-56',
        'p-7 md:p-16',
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
          link='https://api.whatsapp.com/send?phone=525573255094&text=%C2%A1Hola%2C%20Vero!%20Mi%20periodo%20en%20la%20plataforma%20expir%C3%B3%20y%20quiero%20continuar%20con%20mi%20proceso%20de%20aplicaci%C3%B3n%20%F0%9F%98%80'
        />
      </div>
    </div>
    <Footer />
    </>
  )
}
