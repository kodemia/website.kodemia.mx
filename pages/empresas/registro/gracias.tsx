
import Cursor from 'components/TextCursor'
import Footer from 'components/Footer'
import H3 from 'components/H3'
import NavBar from 'components/Navbar'

export default function Thankyou () {
  return (
    <>
      <NavBar />
      <section className='hero has-background-black-bis is-fullheight' id='thanks-page'>
        <main className='hero-body'>
          <div className='container has-text-centered'>
            <div className='columns is-centered'>
              <div className='column is-half'>
                <div className='card has-background-grey-darker is-rounded p-5'>
                  <div className='columns is-multiline container'>
                    <div className='column is-full mt-5'>
                      <H3>
                        <span className='h3-cyan'>Gracias</span> por
                        <br />
                        registrart<Cursor white>e</Cursor>
                      </H3>
                    </div>
                    <div className='column is-full mt-5 mb-5'>
                      Te contactaremos lo más
                      <br />
                      pronto posible
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </>
  )
}
