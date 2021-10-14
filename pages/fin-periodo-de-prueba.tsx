
import classNames from 'classnames'
import { useEffect } from 'react'

import Button from 'components/Button'
import Cursor from 'components/TextCursor'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'

import * as tracker from 'lib/tracker'
import { useRouter } from 'next/router'
import Whatsapp from 'lib/whatsapp'

export default function EndTrialPeriod () {
  const router = useRouter()
  const whatsappLink = Whatsapp.createLink(Whatsapp.copies.trialPeriodExpired)

  useEffect(() => {
    tracker.onTrapPageLoad()
  }, [])

  function goToWhatsapp () {
    tracker.onExpiredUserClickTrapPageContinueButton()
    router.push(whatsappLink)
  }

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
            onClick={goToWhatsapp}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}
