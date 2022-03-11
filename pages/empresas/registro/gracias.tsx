import classNames from 'classnames'

import PageSection from 'components/PageSection'
import Cursor from 'components/TextCursor'
import Footer from 'components/Footer'
import H3 from 'components/H3'
import NavBar from 'components/Navbar'

export default function Thankyou() {
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
          'h-72 p-6 sm:w-2/3 sm:mx-auto'
        )}>
          <div className=' mb-12'>
            <H3>
              <span className='text-brand-primary'>Gracias</span> por
              <br />
              <Cursor children='registrarte' white />
            </H3>
          </div>
          <div className=' text-brand-gray text-center'>
            Te contactaremos lo más
            <br />
            pronto posible
          </div>
        </div>
      </PageSection>
      <Footer />
    </>
  )
}
