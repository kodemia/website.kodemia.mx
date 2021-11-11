import React from 'react'
import classNames from 'classnames'
// My component
import H3 from '../../H3'
import H5 from '../../H5'
import InfoCard from '../../InfoCard'
import DescriptionParagraph from 'components/DescriptionParagraph'

export interface Card {
  icon: string
  text: string
  title: string
}

export interface Info {
  title: string
  keywords: string
  text: string
  cards: Array<Card>
}

export interface Props {
  ourMethod: Info
}

export default function OurMethod ({ ourMethod: { title, keywords, text, cards } }: Props) {
  return (
    <section className={classNames(
      'bg-black-kd',
      'flex justify-center',
      'mob:w-full'
    )}
    >
      <div className={classNames(
        'mob:m-0 tablet:my-0 tablet:mx-20',
        'mob:max-w-full laptop:max-w-content',
        'mob:min-w-full laptop:min-w-content',
        'mob:pt-20 mob:px-11 mob:pb-12',
        'tablet:pt-24 tablet:px-20 tablet:pb-16',
        'laptop:px-0'
      )}
      >
        <H5>
          Nuestro Método
        </H5>
        <div className='max-w-330px'>
          <H3
            whiteText={title}
            cyanText={keywords}
          />
        </div>
        <div className={classNames(
          'my-9',
          'mx-0',
          'mob:max-w-full laptop:max-w-3xl'
        )}
        >
          <DescriptionParagraph>
            {text}
          </DescriptionParagraph>
        </div>
        <div className={classNames(
          'grid',
          'mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 ',
          'mob:grid-rows-none laptop:grid-rows-2',
          'tablet:gap-x-14',
          'tablet:gap-y-7'
        )}
        >
          {cards.map((infoCard, index) => {
            return (
              <InfoCard
                key={`om-card-${index}`}
                icon={infoCard.icon}
                title={infoCard.title}
                text={infoCard.text}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
