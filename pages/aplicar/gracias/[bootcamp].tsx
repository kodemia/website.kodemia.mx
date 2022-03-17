
import { GetStaticPropsContext } from 'next'

import Button from 'components/Button'
import NavBar from 'components/Navbar'
import ThankyouCard from 'components/ThankYouCard'
import Footer from 'components/Footer'

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
      <ThankyouCard>
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
      </ThankyouCard>
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
