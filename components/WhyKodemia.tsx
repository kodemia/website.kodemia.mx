import InfoCard from './InfoCard'

export default function WhyKodemia () {
  return (
    <section className='why-kodemia'>
      <div className='container'>
        <h3 className='subtitle'>¿Por qué Kodemia?</h3>
        <h2 className='title'>Vivimos para <span>formar programadores</span></h2>
        <img className='image' src='/images/why-kodemia.png' alt='koder y mentor sonriendo' />
        <div className='cards'>
          <InfoCard
            icon=''
            title=''
            description=''
          />
        </div>
      </div>
    </section>
  )
}
