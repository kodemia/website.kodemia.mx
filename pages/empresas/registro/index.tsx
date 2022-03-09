
import React from 'react'

import PageSection from 'components/PageSection'
import Cursor from 'components/TextCursor'
import H3 from 'components/H3'
import H5 from 'components/H5'
import NavBar from 'components/Navbar'
import RegisterForm from 'components/Pages/Companies/RegisterForm'
import Seo from 'components/SEO'
import Text from 'components/Text'

export default function Registro() {
  return (
    <>
      <Seo />
      <NavBar />
      <main className='columns'>
        <PageSection
          sectionClassName='bg-brand-black md:h-screen'
          contentClassName='flex flex-col md:flex-row'>
          <aside className='md:w-1/4 md:mr-8 lg:mr-12 mb-12'>
            <H5>
              Aplica ahora
            </H5>
            <div className='mb-6'>
              <H3>
                Únete y<span className='text-brand-primary'> colabora</span> <Cursor children='con nosotros' white />
              </H3>
            </div>
            <Text>
              Te contactaremos lo más pronto posible para coordinar una entrevista personal
            </Text>
          </aside>
          <article className='mb-10 md:w-3/4'>
            <RegisterForm />
          </article>
        </PageSection>
      </main>
    </>
  )
}
