import React from 'react'
// My components
import H5 from '../../H5'
import H3 from '../../H3'
import DescriptionParagraph from 'components/DescriptionParagraph'

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
              <DescriptionParagraph>
                {investment.description}
              </DescriptionParagraph>
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
                    <DescriptionParagraph>
                      {paymentType.description}
                    </DescriptionParagraph>
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
