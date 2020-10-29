
import InfoCard, { Props as InfoCardProps } from '../../InfoCard'

export interface Props {
  cards: Array<InfoCardProps>
}

export default function WhyKodemia ({ cards }: Props) {
  return (
    <section className='why-kodemia'>
      <div className='content'>
        <h3 className='sub-title'>¿Por qué Kodemia?</h3>
        <h2 className='subject'>Vivimos para <span>formar programadores</span></h2>
        <img className='image' src='/images/why-kodemia.png' alt='koder y mentor sonriendo' />
        <div className='why-kodemia-cards'>
          {cards.map((card, index) => {
            return (
              <InfoCard
                key={`card-${index}`}
                icon={card.icon}
                title={card.title}
                text={card.text}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
