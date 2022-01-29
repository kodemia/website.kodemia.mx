
import { useEffect } from 'react'

import NavBar from 'components/Navbar'
import Footer from 'components/Footer'
import Cursor from 'components/TextCursor'
import DescriptionParagraph from 'components/DescriptionParagraph'
import H2 from 'components/H3'
import H5 from 'components/H5'
import ApplyForm from 'components/ApplyForm'
import Seo from 'components/SEO'

export default function Aplicar () {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>
      <Seo />
      <NavBar />
      <div className='section' id='aplicar'>
        <div className='container'>
          <main className='columns'>
            <aside className='column '>
              <div className='delimiter'>
                <H5>
                  Aplica ahora
                </H5>
                <H2>
                  Únete y<span className='h3-cyan'> sé parte</span> <Cursor children='de nuestra comunidad' white />
                </H2>
                <DescriptionParagraph>
                  Te contactaremos lo más pronto posible para coordinar una entrevista personal
                </DescriptionParagraph>
              </div>
            </aside>
            <article className='column is-two-thirds'>
              <ApplyForm />
            </article>
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}
