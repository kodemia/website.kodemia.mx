
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
          'h-85vh w-full',
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
                'pt-14 tablet:pt-0'
              )}
            >
              <figure
                className={classNames(
                  'w-full tablet:w-2/3',
                  'h-1/3',
                  'relative'
                )}
              >
                <p
                  className={classNames(
                    'text-7xl tablet:text-9xl text-center tablet:mt-5',
                    'bg-clip-text text-transparent',
                    'bg-gradient-to-t from-white via-black-kd-dark to-white'
                  )}
                >
                  VIP
                </p>

                <p className='absolute top-16 bg-black-kd w-full text-center tracking-insane ml-1'>
                  KODEDAY
                </p>
                <p className='text-center text-xl'>
                  Leonardo Santiago
                </p>
              </figure>

              <div className='text-2xl text-center tablet:hidden block'>
                Leonardo Santiago
              </div>

              <figure className='tablet:w-1/3'>
                <img
                  src="https://www.codigos-qr.com/qr/php/qr_img.php?d=http%3A%2F%2Ftecnohotelnews.com%2F&s=8&e=m"
                  alt="qr"
                  className='h-28 m-auto'
                />
              </figure>
            </div>
          </div>

        </header>
      </section>
      <section />
      <section className={classNames('h-screen bg-transparent')} ></section>

      <Footer />
      <style jsx global>{`
        body {
          background-color: #181818
        }
      `}</style>
    </>
  )
}
