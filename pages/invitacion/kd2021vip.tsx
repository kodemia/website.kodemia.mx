
import classNames from 'classnames'

import NavBar from 'components/Navbar'
import Footer from 'components/Footer'
import TicketVIP from 'components/TicketVIP'

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
          'pt-10'
        )}
      >
        <TicketVIP
          name='Leonardo santiago p'
          qr=''
        />
      </section>

      <section className='flex flex-col pt-8 justify-center w-full text-center' >
        <p className=''> Descripción </p>
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
