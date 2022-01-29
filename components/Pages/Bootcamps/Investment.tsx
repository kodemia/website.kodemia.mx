
import React from 'react'

import H3 from 'components/H3'
import H5 from 'components/H5'
import Text from 'components/Text'

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
    <section className='columns investment '>
      <div className='column is-full is-flex is-justify-content-center investment-container'>
        <section className='columns is-multiline  investment-wrapper'>
          <div className='column is-three-quarters investment-header'>
            <H5>
              {investment.subtitle}
            </H5>
            <div className='investment-title'>
              <H3
                whiteText={investment.whiteTitle}
                cyanText={investment.cyanTitle}
              />
            </div>
            <div className='description'>
              <Text>
                {investment.description}
              </Text>
            </div>
          </div>
          <div className='column is-full is-flex is-justify-content-space-between payment-types-container'>
            {
              investment.paymentTypes.map((paymentType, index) => (
                <article
                  key={`payment-${index}`}
                  className=' payment-card'
                >
                  <div className='payment-title'>
                    <H5 isWhite>
                      {paymentType.title}
                    </H5>
                  </div>

                  <div className='payment-description'>
                    <Text>
                      {paymentType.description}
                    </Text>
                  </div>
                </article>
              ))
            }
          </div>
        </section>
      </div>
    </section>
  )
}
