
import Button from 'components/Button'
import NavBar from 'components/Navbar'
import ThankyouCard from 'components/ThankYouCard'
import Footer from 'components/Footer'

export default function Thankyou() {
  const text = 'Nos pondremos en contacto contigo cuando se abra la convocatoria \n a la segunda generación del Bootcamp Mobile 👋 \n\n Mientras tanto, no detengas tu aprendizaje.'

  return (
    <>
      <NavBar />
      <ThankyouCard text={text}>
        <div className='sm:w-80'>
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
      </ThankyouCard>
      <Footer />
    </>
  )
}
