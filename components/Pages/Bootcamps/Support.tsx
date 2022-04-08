
import React from 'react'
import classNames from 'classnames'

import H3 from 'components/H3'
import H5 from 'components/H5'
import InfoBullet, { Props as InfoBulletProps } from 'components/InfoBullet'
import PageSection from 'components/PageSection'

export interface Props {
  support: {
    cards: Array<InfoBulletProps>
    cyanTitle: string
    image: string
    secondWhiteTitle: string
    subtitle: string
    whiteTitle: string
  }
}

export default function Support ({ support }: Props): JSX.Element {
  return (
    <PageSection
      contentClassName={classNames(
        'grid',
        'grid-cols-1 lg:grid-cols-3'
      )}
    >
      <div className={classNames(
        'col-start-1',
        'row-start-1',
        'lg:col-span-3',
        'mb-10',
        'max-w-md'
      )}>
        <H5>
          {support.subtitle}
        </H5>
        <H3
          whiteText={support.whiteTitle}
          cyanText={support.cyanTitle}
        />
        <H3 whiteText={support.secondWhiteTitle} />
      </div>
      <div className={classNames(
        'h-[440px] lg:h-[540px]',
        'w-full'
      )}>
        <img
          className={classNames(
            'col-start-1',
            'row-start-2',
            'col-span-1',
            'h-full',
            'mb-5 lg:m-auto',
            'object-cover',
            'rounded-small',
            'w-full'
          )}
          src={support.image}
          alt='soporte-kodemia-beneficios'
        />
      </div>
      <div className={classNames(
        'lg:col-start-2',
        'lg:row-start-2',
        'lg:col-span-2',
        'grid',
        'grid-cols-1 sm:grid-cols-2',
        'sm:gap-x-9',
        'gap-y-7',
        'lg:items-center',
        'lg:ml-10',
        'mt-9 lg:mt-0'
      )}>
        {
          support.cards.map((infoBullet, index) => {
            return (
              <InfoBullet
                key={`support-${index}`}
                icon={infoBullet.icon}
                title={infoBullet.title}
                text={infoBullet.text}
              />
            )
          })
        }
      </div>
    </PageSection>
  )
}
