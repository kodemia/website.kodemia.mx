
import React from 'react'
import classNames from 'classnames'

import H3 from 'components/H3'
import H5 from 'components/H5'
import PageSection from 'components/PageSection'
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

export default function Investment ({ investment }: Props): JSX.Element {
  return (
    <PageSection
      sectionClassName={classNames(
        'bg-javascript-investment-lg',
        'bg-cover bg-center bg-no-repeat',
        'w-full'
      )}
      contentClassName={classNames(
        ''
      )}
    >
    {/* <section className={classNames(
      // 'columns investment'
      ''
    )}> */}
      <div className={classNames(
        // 'column is-full is-flex is-justify-content-center',
        // 'investment-container'
        ''
      )}>
        <section className={classNames(
          // 'columns is-multiline',
          // 'investment-wrapper'
          'flex-col',
          'w-full' // TODO: Comprobar si es necesario este wrapper
        )}>
          <div className={classNames(
            // 'column is-three-quarters',
            // 'investment-header'
            'w-3/4'
          )}>
            <H5>
              {investment.subtitle}
            </H5>
            <div className={classNames(
              // 'investment-title'
              'max-w-[200px]'
            )}>
              <H3
                whiteText={investment.whiteTitle}
                cyanText={investment.cyanTitle}
              />
            </div>
            <div className={classNames(
              // 'description'
              'my-11', // TODO: Comprobar si es necesario este margin
              'max-w-2xl' // TODO: Comprobar tamaño, en css está a 700px
            )}>
              <Text>
                {investment.description}
              </Text>
            </div>
          </div>
          <div className={classNames(
            // 'column is-full is-flex is-justify-content-space-between',
            // 'payment-types-container'
            'flex flex-col md:flex-row',
            'md:flex-wrap',
            'justify-between',
            'w-full'
          )}>
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
    {/* </section> */}
    </PageSection>
  )
}
