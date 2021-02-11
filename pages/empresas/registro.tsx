
import React from 'react'
import NavBar from 'components/Navbar'
import Cursor from 'components/TextCursor'
import DescriptionParagraph from 'components/DescriptionParagraph'
import H2 from 'components/H2'
import H3 from 'components/H3'
import RegisterForm from 'components/Pages/Companies/RegisterFrom'
import Seo from 'components/SEO'

export default function Registro () {
  return (
    <>
      <Seo />
      <NavBar />
      <div className='section' id='aplicar'>
        <div className='container'>
          <main className='columns'>
            <aside className='column '>
              <div className='delimiter'>
                <H3 text='Aplica ahora' />
                <H2>
                  Únete y <span className='h2-cyan'> colabora</span> con nosotro<Cursor white>s</Cursor>
                </H2>
                <DescriptionParagraph>
                  Te contactaremos lo más pronto posible para coordinar una entrevista personal
                </DescriptionParagraph>
              </div>
            </aside>
            <article className='column is-two-thirds'>
              <RegisterForm />
            </article>
          </main>
        </div>
      </div>
    </>
  )
}
