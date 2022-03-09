
import { useEffect } from 'react'

import PageSection from 'components/PageSection'
import ApplyForm from 'components/ApplyForm'
import Cursor from 'components/TextCursor'
import Footer from 'components/Footer'
import H2 from 'components/H3'
import H5 from 'components/H5'
import NavBar from 'components/Navbar'
import Seo from 'components/SEO'
import Text from 'components/Text'

export default function Aplicar() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>
      <Seo />
      <NavBar />
      <main >
        <PageSection
        sectionClassName='bg-brand-black md:h-screen'
        contentClassName='flex flex-col md:flex-row'>
          <aside className='md:w-1/4 md:mr-8 lg:mr-12 mb-12'>
            <H5>
              Aplica ahora
            </H5>
            <div className='mb-6'>
              <H2>
                Únete y<span className='text-brand-primary'> sé parte</span> <Cursor children='de nuestra comunidad' white />
              </H2>
            </div>
            <Text>
              Te contactaremos lo más pronto posible para coordinar una entrevista personal
            </Text>
          </aside>
          <article className='mb-10 md:w-3/4'>
            <ApplyForm />
          </article>
        </PageSection>
      </main>
      <Footer />
    </>
  )
}
