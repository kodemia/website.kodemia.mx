
import { GetStaticPropsContext } from 'next'

import NavBar from 'components/Navbar'
import Footer from 'components/Footer'
import H3 from 'components/H3'
import Cursor from 'components/TextCursor'
import Button from 'components/Button'

interface Props {
  bootcamp: 'javascript-live' | 'python-live' | 'android' | 'ios' | 'backbase'
}

export default function Thankyou (props: Props) {
  const isBackbase = props.bootcamp?.toLowerCase() === 'backbase'
    || props.bootcamp?.toLowerCase() === 'android'
    || props.bootcamp?.toLowerCase() === 'ios'

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
                        <Cursor children='registrarte' white />
                      </H3>
                    </div>
                    <div className='column is-full mt-5 mb-5'>
                      Te contactaremos lo más
                      <br />
                      pronto posible
                    </div>
                    {isBackbase && (
                      <>
                        {/* Android */}
                        <div className='column is-full mb-5 is-hidden-touch'>
                          <Button
                            isPrimary
                            label='Descarga el Brochure de Android'
                            icon='/icons/download.svg'
                            href={'/brochures/android/desktop'}
                          />
                        </div>
                        <div className='column is-full mb-5 is-hidden-desktop'>
                          <Button
                            isPrimary
                            label='Descarga el Brochure de Android'
                            icon='/icons/download.svg'
                            href={'/brochures/android/mobile'}
                          />
                        </div>

                        {/* iOS */}
                        <div className='column is-full mb-5 is-hidden-touch'>
                          <Button
                            isPrimary
                            label='Descarga el Brochure de iOS'
                            icon='/icons/download.svg'
                            href={'/brochures/ios/desktop'}
                          />
                        </div>
                        <div className='column is-full mb-5 is-hidden-desktop'>
                          <Button
                            isPrimary
                            label='Descarga el Brochure iOS'
                            icon='/icons/download.svg'
                            href={'/brochures/ios/mobile'}
                          />
                        </div>
                      </>
                    )}
                    {!isBackbase && (
                      <>
                        <div className='column is-full mb-5 is-hidden-touch'>
                          <Button
                            isPrimary
                            label='Descarga el Brochure'
                            icon='/icons/download.svg'
                            href={`/brochures/${props.bootcamp}/desktop`}
                          />
                        </div>
                        <div className='column is-full mb-5 is-hidden-desktop'>
                          <Button
                            isPrimary
                            label='Descarga el Brochure'
                            icon='/icons/download.svg'
                            href={`/brochures/${props.bootcamp}/mobile`}
                          />
                        </div>
                      </>
                    )}
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
      { params: { bootcamp: 'python-live' } },
      { params: { bootcamp: 'android' } },
      { params: { bootcamp: 'ios' } },
      { params: { bootcamp: 'backbase' } },
    ],
    fallback: false
  }
}
