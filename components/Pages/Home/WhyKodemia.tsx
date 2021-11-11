import React from 'react'
import classNames from 'classnames'
// my components
import H3 from '../../H3'
import H5 from '../../H5'
import InfoCard, { Props as InfoCardProps } from '../../InfoCard'

export interface Props {
  cards: Array<InfoCardProps>
  cyanTitle: string
  image: string
  subtitle: string
  whiteTitle: string
}

export default function WhyKodemia ({
  cards,
  cyanTitle,
  image,
  subtitle,
  whiteTitle
}: Props) {
  return (
    <section className={classNames(
      // 'why-kodemia',
      'bg-black-kd',
      'flex justify-center',
      // 'mob:pt-20 mob:px-11 mob:pb-12',
      // 'tablet:pt-24 tablet:px-20 tablet:pb-16',
      // 'laptop:pt-24 laptop:px-0 laptop:pb-20',
      'mob:w-full'
    )}
    >
      <div className={classNames(
        // 'why-kodemia-container',
        // 'section-container',
        'grid',
        'mob:grid-cols-1 laptop:grid-cols-3',
        'mob-m-0 tablet:my-0 tablet:mx-20',
        'mob:pt-20 mob:px-11 mob:pb-12',
        'tablet:pt-24 tablet:px-20 tablet:pb-16',
        'laptop:px-0',
        // 'tablet:mt-24 tablet:mx-20 tablet:mb-16',
        // 'laptop:mt-24 laptop:mx-0 laptop:mb-20',

        // 'mob:m-0 tablet:my-0 tablet:mx-20',
        // 'laptop:px-20',
        // 'laptop:max-w-content', // TODO: revisar si es el tamaño correcto
        'mob:max-w-full laptop:max-w-content',
        'mob:min-w-full laptop:min-w-content',
        'mob:min-w-full'
      )}
      >
        <div className={classNames(
          // 'subject',
          'mob:col-span-1',
          'laptop:col-span-1', // TODO: checar si se duplica y borrar
          'mob:mb-10',
          'mob:max-w-full tablet:max-w-50% laptop:max-w-full',
          'mob:min-w-50%',
          'mob:row-start-1'
        )}
        >
          <H5>
            {subtitle}
          </H5>
          <H3 whiteText={whiteTitle} cyanText={cyanTitle} />
        </div>
        <img
          className={classNames(
            // 'image',
            'rounded-gray-card',
            'mob:mb-5',
            'laptop:m-auto',
            'laptop:max-w-full',
            // 'tablet:max-w-full',
            'mob:row-start-2',
            'tablet:w-full',
            'laptop:w-full'

          )}
          src={image} alt='escuela-de-programación-koder-y-mentor-sonriendo'
        />

        <div className={classNames(
          // 'why-kodemia-cards',
          'col-span-2',
          'grid',
          'mob:grid-cols-1 tablet:grid-cols-2',
          'gap-x-9',
          'gap-y-7',
          'tablet:mb-0',
          'mob:ml-0 laptop:ml-14',
          'mob:pl-0',
          'mob:row-start-3 laptop:row-start-2'
        )}
        >
          {
            cards.map((infoCard, index) => {
              return (
                <InfoCard
                  key={`card-${index}`}
                  icon={infoCard.icon}
                  title={infoCard.title}
                  text={infoCard.text}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
