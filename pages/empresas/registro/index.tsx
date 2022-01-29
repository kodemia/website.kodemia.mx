
import React from 'react'
import NavBar from 'components/Navbar'
import Cursor from 'components/TextCursor'
import Text from 'components/Text'
import H5 from 'components/H5'
import H3 from 'components/H3'
import RegisterForm from 'components/Pages/Companies/RegisterForm'
import Seo from 'components/SEO'

export default function Registro () {
  return (
    <>
      <Seo />
      <NavBar />
      <div className='section' id='registro'>
        <div className='container'>
          <main className='columns'>
            <aside className='column '>
              <div className='delimiter'>
                <H5>
                  Aplica ahora
                </H5>
                <H3>
                  Únete y <span className='h3-cyan'> colabora</span><Cursor children='con nosotros' white />
                </H3>
                <Text>
                  Te contactaremos lo más pronto posible para coordinar una entrevista personal
                </Text>
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
