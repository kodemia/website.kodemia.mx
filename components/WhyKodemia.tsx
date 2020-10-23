
import InfoCard, { Props as InfoCardProps } from './InfoCard'

export interface Props {
  cards: Array<InfoCardProps>
}

export default function WhyKodemia ({ cards }: Props) {
  return (
    <section className='why-kodemia'>
      <div className='container'>
        <h3 className='subtitle'>¿Por qué Kodemia?</h3>
        <h2 className='title'>Vivimos para <span>formar programadores</span></h2>
        <img className='image' src='/images/why-kodemia.png' alt='koder y mentor sonriendo' />
        <div className='why-kodemia-cards'>
          {cards.map((card, index) => {
            return (
              <InfoCard
                key={`card-${index}`}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
