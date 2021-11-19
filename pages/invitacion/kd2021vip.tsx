
import classNames from 'classnames'

import Whatsapp from 'lib/whatsapp'

import NavBar from 'components/Navbar'
import Footer from 'components/Footer'
import TicketVIP from 'components/TicketVIP'
import Button from 'components/Button'

export default function Kd2021vip () {
  return (
    <>
      <NavBar/>
      <section
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

      <section
        className='flex flex-col pt-8 justify-center text-center max-w-prose mx-auto p-5'
      >
        <h2 className='text-h2 tracking-spaced uppercase text-white-kd mb-4'>
          Descripción
        </h2>
        <p className='text-gray-kd-lighter'>
          Construirás un Pokédex en web integrando <span className="text-cyan-kd-dark">
            HTML5, CSS3, Javascript,
            React y NextJS
          </span> consumiendo el API de Pokemón. Además desplegarás la
          aplicación con Vercel para ponerla en línea y compartirla con tus amigos.
        </p>
      </section>

      <section
        className='flex flex-col pt-8 justify-center text-center max-w-prose mx-auto p-5'
      >
        <h2 className='text-h2 tracking-spaced uppercase text-white-kd mb-4'>
          Detalles del evento
        </h2>

        <h5 className='text-base uppercase font-bold'>
          Dónde
        </h5>
        <p>
          Av. Revolución 356-6o piso, <br />
          San Pedro de los Pinos, <br />
          Benito Juárez, 03800 <br />
          Ciudad de México, CDMX
        </p>

        <h5 className='text-base uppercase font-bold mt-9'>
          Cuándo
        </h5>
        <p>
          20 de Noviembre
        </p>

        <h5 className='text-base uppercase font-bold mt-9'>
          A qué hora
        </h5>
        <p>
          10:00 AM - 19:00 PM
        </p>
      </section>

      <section
        className='flex flex-col pt-8 justify-center text-center max-w-prose mx-auto p-5'
      >
        <h2 className='text-h2 tracking-spaced uppercase text-white-kd mb-4'>
          Programa
        </h2>

        <b className='uppercase'>
          9:30 - 10:00 Recepción <br />
          ( Verónica Nemecio )
        </b>
        <p className='text-gray-kd-lighter'>
          Entrega del Welcome Pack Café y Donadoras
        </p>

        <b className='uppercase mt-5'>
          10:00 - 10:20 Bienvenida <br />
          ( LeoNARDO Santiago )
        </b>
        <p className='text-gray-kd-lighter'>
          Presentación y cronograma del día
        </p>

        <b className='uppercase mt-5'>
          10:20 - 13:30 Koding Pt. 1 <br />
          (Israel Salinas)
        </b>
        <p className='text-gray-kd-lighter'>
          Introducción teórica <br />
          HTML <br />
          CSS <br />
          JS <br />
          React <br />
          Next <br />
          Desarrollo del Pokédex en Next Pt. 1
        </p>

        <b className='uppercase mt-5'>
          13:30 - 14: 30 Break y Comida
        </b>

        <b className='uppercase mt-5'>
          14:30 - 15:00 Testimonio
        </b>

        <b className='uppercase mt-5'>
          15:00 - 18:00 Kodings Pt.2 <br />
          (Charles Silva)
        </b>
        <p className='text-gray-kd-lighter'>
          Desarrollo del Pokédex en Next Pt. 1 <br />
          Despliegue en Vercel
        </p>

        <b className='uppercase mt-5'>
          18:00 - 18:20 Preguntas y respuestas
        </b>

        <b className='uppercase mt-5'>
          18:20 - 19:00 Networking y chelas
        </b>

      </section>

      <section
        className='flex flex-col pt-8 justify-center text-center max-w-prose mx-auto p-5'
      >
        <h2 className='text-h2 tracking-spaced uppercase text-white-kd mb-4'>
          ¿Tienes dudas?
        </h2>
        <Button
          label='Contactanos'
          href={Whatsapp.createLink('Hola! Tengo dudas sobre el kodeday')}
          isPrimary
        />
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
