
import Button from 'components/Button'
import Footer from 'components/Footer'
import H1 from 'components/H1'
import H5 from 'components/H5'
import Navbar from 'components/Navbar'
import BigMessagePage from 'components/BigMessagePage'

export default function Custom404() {
  return (
    <>
      <Navbar />
      <BigMessagePage >
        <div className='text-center'>
          <H1>
            404
          </H1>
          <div className='my-12 w-64'>
            <H5>
              Esta página no fue encontrada 🤕
            </H5>
          </div>
          <div className='w-64'>
            <Button
              isPrimary
              label='Regresar a Home'
              link='/'
            />
          </div>
        </div>
      </BigMessagePage>
      <Footer />
    </>
  )
}
