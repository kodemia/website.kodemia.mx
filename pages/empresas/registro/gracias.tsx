
import NavBar from 'components/Navbar'
import BigMessagePage from 'components/BigMessagePage'
import H3 from 'components/H3'
import Cursor from 'components/TextCursor'
import Text from 'components/Text'
import Footer from 'components/Footer'

export default function Thankyou() {
  return (
    <>
      <NavBar />
      <BigMessagePage>
        <div className='text-center'>
          <H3>
            <span className='text-brand-primary'>Gracias</span> por
            <br />
            <Cursor children='registrarte' white />
          </H3>
        </div>
        <div className='text-center sm:w-80 mt-12'>
          <Text>
            Te contactaremos lo más
            <br />
            pronto posible
          </Text>
        </div>
      </BigMessagePage>
      <Footer />
    </>
  )
}
