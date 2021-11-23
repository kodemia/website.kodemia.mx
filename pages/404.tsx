import classNames from 'classnames'

import Button from 'components/Button'
import Footer from 'components/Footer'
import H5 from 'components/H5'
import Navbar from 'components/Navbar'

export default function Custom404 () {
  return (
    <>
      <Navbar />
      <section className={classNames(
        'bg-black-kd',
        'flex',
        'h-screen',
        'items-center',
        'justify-center',
        'mob:py-6 mob:px-5'

      )}
      >
        <div className={classNames(
          'bg-gray-kd-darker',
          'flex',
          'items-center',
          'justify-center',
          'mob:p-6',
          'rounded-gray-card',
          'text-center',
          'w-full lg:w-1/2 xl:w-1/3'
        )}
        >
          <div className={classNames(
            'h-full',
            'max-w-300',
            'mob:mt-12'
          )}
          >
            <p className={classNames(
              'font-bold',
              'text-5xl',
              'text-white-kd'
            )}
            >
              404
            </p>
            <div className={classNames(
              'mob:mt-12'
            )}
            >
              <H5>
                Esta página no fue encontrada 🤕
              </H5>
            </div>
            <div className={classNames(
              'mob:mt-12',
              'mob:mb-9',
              'w-full'
            )}
            >
              <Button
                isPrimary
                label='Regresar a Home'
                link='/'
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
