
import { useEffect } from 'react'

import Cursor from 'components/TextCursor'
import DescriptionParagraph from 'components/DescriptionParagraph'
import H2 from 'components/H2'
import H3 from 'components/H3'
import NavBar from 'components/Navbar'
import ApplyForm from 'components/ApplyForm'

export default function Aplicar () {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>
      <NavBar />
      <div className='section' style={{ paddingTop: '120px' }} id='aplicar'>
        <div className='container'>
          <main className='columns'>
            <aside className='column is-one-third'>
              <H3 text='Aplica ahora' />
              <H2>
                Únete y sé parte de nuestra comunida<Cursor white>d</Cursor>
              </H2>
              <DescriptionParagraph>
                Te contactaremos lo más pronto posible para coordinar una entrevista personal
              </DescriptionParagraph>
            </aside>
            <article className='column'>
              <ApplyForm />
            </article>
          </main>
        </div>
      </div>
    </>
  )
}
