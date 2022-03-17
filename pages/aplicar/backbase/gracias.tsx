
import Button from 'components/Button'
import NavBar from 'components/Navbar'
import BigMessagePage from 'components/BigMessagePage'
import H3 from 'components/H3'
import Text from 'components/Text'
import Cursor from 'components/TextCursor'
import Footer from 'components/Footer'

export default function Thankyou() {

  return (
    <>
      <NavBar />
      <BigMessagePage>
        <div className='text-center'>
          <H3>
            <span className='text-brand-primary'>¡Muchas gracias</span> por
            <br />
            registrarte<Cursor white>!</Cursor>
          </H3>
        </div>
        <div className='text-center my-12 sm:w-80'>
          <Text>
            Nos pondremos en contacto contigo cuando se abra la convocatoria <br /> a la segunda generación del Bootcamp Mobile 👋 <br /><br />Mientras tanto, no detengas tu aprendizaje.
          </Text>
        </div>
        <div className='sm:w-80 '>
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
      </BigMessagePage>
      <Footer />
    </>
  )
}
