import H2 from 'components/H2'
import H3 from 'components/H3'
import InfoCard from 'components/InfoCard'
import BootcampCard from 'components/BootcampCard'

export default function FindKoder () {
  return (
    <section className='find-koder'>
      <div className='find-koder-container section-container'>
        <H3 text='¿Cómo encuentro al Koder perfecto para mi empresa?' />
        <H2 whiteText='Encuentra al' cyanText='programador ideal' />
      </div>
    </section>
  )
}
