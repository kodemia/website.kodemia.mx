import React from 'react'
// My components
import H2 from '../../H2'
import H3 from '../../H3'

export interface Payment {
  title: string;
  description: string;
}

export interface Props {
  investment: {
    whiteTitle: string;
    cyanTitle: string;
    subtitle: string;
    description: string;
    paymentTypes: Array<Payment>;
  };
}

export default function Investment ({ investment }: Props) {
  return (
    <div className='columns investment '>
      <div className='column is-full is-flex is-justify-content-center investment-container'>
        <section className='columns is-multiline  investment-wrapper'>
          <div className='column is-three-quarters investment-header'>
            <H3 text={investment.subtitle} />
            <div className='investment-title'>
              <H2
                whiteText={investment.whiteTitle}
                cyanText={investment.cyanTitle}
              />
            </div>
            <p className='description'>
              {investment.description}
            </p>
          </div>
          <div className='column is-full is-flex is-justify-content-space-between payment-types-container'>
            {
              investment.paymentTypes.map((paymentType, index) => (
                <article key={`payment-${index}`} className=' payment-card'>
                  <h5 className='payment-title'>{paymentType.title}</h5>
                  <p className='payment-description'>{paymentType.description}</p>
                </article>
              ))
            }
          </div>
        </section>
      </div>
    </div>
  )
}
