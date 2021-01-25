
import { GetStaticPropsContext } from 'next'

import NavBar from 'components/Navbar'
import H2 from 'components/H2'
import Cursor from 'components/TextCursor'
import Button from 'components/Button'

interface Props {
  bootcamp: 'javascript-live' | 'python-live'
}

export default function Thankyou (props: Props) {
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
                      <H2>
                        <span className='h2-cyan'>Gracias</span> por
                        <br />
                        registrart<Cursor white>e</Cursor>
                      </H2>
                    </div>
                    <div className='column is-full mt-5 mb-5'>
                      Te contactaremos lo más
                      <br />
                      pronto posible
                    </div>
                    <div className='column is-full mb-5'>
                      <Button
                        isPrimary
                        label='Descarga el Brochure'
                        icon='/icons/download.svg'
                        link={`/brochures/${props.bootcamp}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export function getStaticProps ({ params }: GetStaticPropsContext) {
  return {
    props: {
      bootcamp: params?.bootcamp
    }
  }
}

export function getStaticPaths () {
  return {
    paths: [
      { params: { bootcamp: 'javascript-live' } },
      { params: { bootcamp: 'python-live' } }
    ],
    fallback: false
  }
}
