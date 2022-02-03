
import classNames from 'classnames'

import Button from 'components/Button'
import Cursor from 'components/TextCursor'
import Footer from 'components/Footer'
import H3 from 'components/H3'
import NavBar from 'components/Navbar'

export default function Thankyou () {
  return (
  <>
    <NavBar />
    <section className={classNames(
      'bg-black-kd',
      'flex flex-col',
      'items-center',
      'justify-center',
      'h-screen',
      'py-12',
      'px-5'
    )}>
      <div className={classNames(
        'max-w-1086 w-full',
        'flex justify-center',
      )}>
        <div className={classNames(
          'bg-gray-kd-dark',
          'flex flex-col',
          'p-5',
          'rounded-gray-card',
          'text-center',
          'w-full md:w-2/3',
        )}>
          <div className={classNames(
            'self-center',
            'max-w-300'
          )}>
            <div className={classNames(
              'mt-9'
            )}>
              <H3>
                <span className='h3-cyan'>¡Muchas gracias</span> por
                <br />
                registrarte<Cursor white>!</Cursor>
              </H3>
            </div>
            <div className={classNames(
              'mt-12',
              'text-gray-kd-lighter'
            )}>
              Nos pondremos en contacto contigo cuando se abra la convocatoria
              <br />
              a la segunda generación del Bootcamp Mobile 👋
              <br />
              <br />
              Mientras tanto, no detengas tu aprendizaje.
            </div>
            <div className={classNames(
              'mt-12',
              'mb-9'
            )}>
              <Button
                isPrimary
                label='Ver Bootcamp de JavaScript'
                link={{
                  pathname: '/javascript-live',
                  query: {
                    utm_source: 'backbase',
                    utm_medium: 'landingpage',
                    utm_campaign: 'BB',
                    utm_content: 'registroBB'
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
)
}
