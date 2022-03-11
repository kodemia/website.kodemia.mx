
import { GetStaticPropsContext } from 'next'
import classNames from 'classnames'

import PageSection from 'components/PageSection'
import Button from 'components/Button'
import Cursor from 'components/TextCursor'
import Footer from 'components/Footer'
import H3 from 'components/H3'
import NavBar from 'components/Navbar'

interface Props {
  bootcamp: 'javascript-live' | 'python-live' | 'android' | 'ios' | 'backbase'
}

export default function Thankyou(props: Props) {
  const isBackbase = props.bootcamp?.toLowerCase() === 'backbase'
    || props.bootcamp?.toLowerCase() === 'android'
    || props.bootcamp?.toLowerCase() === 'ios'

  return (
    <>
      <NavBar />
      <PageSection
        sectionClassName='bg-brand-black h-screen'
        contentClassName=' my-auto'
      >
        <div className={classNames(
          'bg-brand-black-light',
          'flex flex-col items-center justify-center',
          'rounded-medium',
          'p-6 md:w-2/3 md:mx-auto'
        )}>
          <div className='mb-12'>
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
      </PageSection>
      <Footer />
    </>
  )
}

export function getStaticProps({ params }: GetStaticPropsContext) {
  return {
    props: {
      bootcamp: params?.bootcamp
    }
  }
}

export function getStaticPaths() {
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
