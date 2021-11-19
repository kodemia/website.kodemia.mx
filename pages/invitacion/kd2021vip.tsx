
import classNames from 'classnames'

import NavBar from 'components/Navbar'
import Footer from 'components/Footer'

export default function Kd2021vip () {
  return (
    <>
      <NavBar/>
      <section
        data-component-name='ticket-hero'
        className={classNames(
          'flex justify-center items-center',
          'h-800px w-full',
          'bg-gradient-to-t from-black-kd via-purple-600 to-cyan-kd',
          'pt-14'
        )}
      >
        <header className='mt-0 tablet:mt-0  relative'>
          <img
            src="https://cdn.kodemia.mx/images/invitacion/ticket.svg"
            alt="ticket"
            className='tablet:px-10 hidden tablet:block'
          />
          <img
            src="https://cdn.kodemia.mx/images/invitacion/ticket-vertical.svg"
            alt="ticket vertical"
            className='tablet:hidden max-h-500px'
          />
          <div
            className={classNames(
              'absolute top-0',
              'h-full w-full',
              'px-8 py-16',
              'tablet:px-32 tablet:py-10'
            )}
          >
            <div
              className={classNames(
                'h-full',
                'flex flex-col tablet:flex-row',
                'pt-14 tablet:pt-0 pb-3'
              )}
            >
              <figure
                className={classNames(
                  'w-full tablet:w-2/3',
                  'h-full',
                  'relative',
                  'flex justify-center items-center flex-col'
                )}
              >
                <p
                  className={classNames(
                    'text-7xl tablet:text-9xl text-center ',
                    // 'tablet:mt-4',
                    'bg-clip-text text-transparent',
                    'bg-gradient-to-t from-white via-black-kd-light to-white'
                  )}
                >
                  VIP
                </p>

                <p
                  className={classNames(
                    'absolute tablet:top-1/3 w-full ml-2',
                    'bg-black-kd',
                    'text-center',
                    'tablet:tracking-even-wider tracking-widest',
                    'uppercase tablet:text-xl text-sm',
                    'tablet:leading-5 leading-4'
                  )}
                >
                  KODEDAY
                </p>
                <p className='text-center tracking-spaced uppercase hidden tablet:block w-full'>
                  Leonardo Santiago
                </p>
              </figure>

              <div className='text-xl text-center tablet:hidden block uppercase tracking-widest'>
                Leonardo Santiago
              </div>

              <figure className='tablet:w-1/3 tablet:my-auto'>
                <img
                  src="https://www.codigos-qr.com/qr/php/qr_img.php?d=http%3A%2F%2Ftecnohotelnews.com%2F&s=8&e=m"
                  alt="qr"
                  className='tablet:h-28 h-20 mx-auto mt-7 tablet:mt-0'
                />
              </figure>
            </div>
          </div>

        </header>
      </section>
      <section />
      <section className={classNames('flex flex-col pt-8 justify-center w-full text-center')} >
        <p className={classNames('')}> Descripción </p>
      </section>

      <Footer />
      <style jsx global>{`
        body {
          background-color: #181818
        }
      `}</style>
    </>
  )
}
