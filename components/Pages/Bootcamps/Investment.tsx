
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
    <div className={classNames(
      'bg-javascript-investment-lg',
      'bg-cover bg-center bg-no-repeat',
      'w-full'
    )}>
      <PageSection
        sectionClassName='bg-brand-black/60'
        contentClassName='flex flex-col'
      >
        <div className='w-full lg:w-3/4'>
          <H5>
            {investment.subtitle}
          </H5>
          <div className='max-w-[200px]'>
            <H3
              whiteText={investment.whiteTitle}
              cyanText={investment.cyanTitle}
            />
          </div>
          <div className='my-11 max-w-[700px]'>
            <Text>
              {investment.description}
            </Text>
          </div>
        </div>
        <div className={classNames(
          'flex flex-col md:flex-row',
          'md:flex-wrap',
          'gap-x-3',
          'justify-between',
          'w-full'
        )}>
          {
            investment.paymentTypes.map((paymentType, index) => (
              <article
                key={`payment-${index}`}
                className={classNames(
                  'border border-solid border-brand-primary',
                  'my-5',
                  'md:mt-8 md:mb-0 lg:mt-0',
                  'py-8 px-6',
                  'rounded-small',
                  'w-full md:w-[45%] lg:w-[30%]'
                )}
              >
                <div className='max-w-full lg:max-w-[195px]'>
                  <H5 isWhite>
                    {paymentType.title}
                  </H5>
                </div>
                <div className={classNames(
                  'mt-5',
                  'max-w-full',
                  'min-h-[56px]'
                )}>
                  <Text>
                    {paymentType.description}
                  </Text>
                </div>
              </article>
            ))
          }
        </div>
      </PageSection>
    </div>
  )
}
