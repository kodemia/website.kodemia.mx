
import NavBar from 'components/Navbar'
import H3 from 'components/H3'
import H2 from 'components/H2'
import Cursor from 'components/TextCursor'
import DescriptionParagraph from 'components/DescriptionParagraph'

function ApplyForm () {
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
            <article className='column has-background-success'>
              <form className='columns is-mobile is-multiline'>
                <div className='column is-half-desktop is-full-touch'>
                  <input className='input is-rounded' type='text' placeholder='Rounded input' />
                </div>
                <div className='column is-half-desktop is-full-touch'>
                  <input className='input is-rounded' type='text' placeholder='Rounded input' />
                </div>
              </form>
            </article>
          </main>
        </div>
      </div>
    </>
  )
}

export default ApplyForm
