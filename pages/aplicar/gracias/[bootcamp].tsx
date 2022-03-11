
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
          'rounded-wide',
          'px-6 py-9 sm:mx-auto',
          'sm:w-2/3 lg:w-2/4'
        )}>
          <H3>
            <span className='text-brand-primary'>Gracias</span> por
            <br />
            <Cursor children='registrarte' white />
          </H3>
          <div className='text-brand-gray-light text-center my-12'>
            Te contactaremos lo más
            <br />
            pronto posible
          </div>
          {isBackbase && (
            <div className='sm:w-72'>
              {/* Android */}
              <div className='hidden lg:block mb-12'>
                <Button
                  isPrimary
                  label='Descarga el Brochure de Android'
                  icon='/icons/download.svg'
                  href={'/brochures/android/desktop'}
                />
              </div>
              <div className='lg:hidden mb-12'>
                <Button
                  isPrimary
                  label='Descarga el Brochure de Android'
                  icon='/icons/download.svg'
                  href={'/brochures/android/mobile'}
                />
              </div>

              {/* iOS */}
              <div className='hidden lg:block'>
                <Button
                  isPrimary
                  label='Descarga el Brochure de iOS'
                  icon='/icons/download.svg'
                  href={'/brochures/ios/desktop'}
                />
              </div>
              <div className='lg:hidden'>
                <Button
                  isPrimary
                  label='Descarga el Brochure iOS'
                  icon='/icons/download.svg'
                  href={'/brochures/ios/mobile'}
                />
              </div>
            </div>
          )}
          {!isBackbase && (
            <div className='sm:w-72'>
              <div className='hidden lg:block'>
                <Button
                  isPrimary
                  label='Descarga el Brochure'
                  icon='/icons/download.svg'
                  href={`/brochures/${props.bootcamp}/desktop`}
                />
              </div>
              <div className='lg:hidden'>
                <Button
                  isPrimary
                  label='Descarga el Brochure'
                  icon='/icons/download.svg'
                  href={`/brochures/${props.bootcamp}/mobile`}
                />
              </div>
            </div>
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
