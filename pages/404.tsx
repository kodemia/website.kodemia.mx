import Button from 'components/Button'
import Footer from 'components/Footer'
import H5 from 'components/H5'
import Navbar from 'components/Navbar'

export default function Custom404 () {
  return (
    <>
      <Navbar />
      <section className='hero has-background-black-bis is-fullheight' id='custom-404'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <div className='columns is-centered'>
              <div className='column is-half'>
                <div className='card has-background-grey-darker p-5 is-rounded'>
                  <div className='columns is-multiline container'>
                    <div className='column is-full mt-5'>
                      <p className='is-size-1 has-text-weight-bold has-text-white'>
                        404
                      </p>
                      <div className='column is-full mt-5 mb-5'>
                        <H5 text='Esta página no fue encontrada 🤕' />
                      </div>
                      <div className='column is-full mb-5'>
                        <Button
                          isPrimary
                          label='Regresar a Home'
                          link='/'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
