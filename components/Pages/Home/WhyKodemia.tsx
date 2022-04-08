
import React from 'react'
import classNames from 'classnames'

import H3 from 'components/H3'
import H5 from 'components/H5'
import InfoBullet, { Props as InfoBulletProps } from 'components/InfoBullet'
import PageSection from 'components/PageSection'

export interface Props {
  cards: Array<InfoBulletProps>
  cyanTitle: string
  image: string
  subtitle: string
  whiteTitle: string
}

export default function WhyKodemia ({ cards, cyanTitle, image, subtitle, whiteTitle }: Props): JSX.Element {
  return (
    <PageSection
      sectionClassName='bg-brand-black'
      contentClassName={classNames(
        'grid',
        'grid-cols-1 lg:grid-cols-3',
    )}>
      <div className={classNames(
        'col-start-1',
        'row-start-1',
        'lg:col-span-3',
        'mb-10',
        'w-full sm:w-1/2',
      )}>
        <H5>
          {subtitle}
        </H5>
        <div className='max-w-[365px]'>
          <H3
            whiteText={whiteTitle}
            cyanText={cyanTitle}
          />
        </div>
      </div>
      <img
        className={classNames(
          'col-start-1',
          'row-start-2',
          'col-span-1',
          'mb-5 lg:m-auto',
          'max-w-full',
          'rounded-wide',
          'w-full'
        )}
        src={image}
        alt='escuela-de-programación-koder-y-mentor-sonriendo'
      />
      <div className={classNames(
        'lg:col-start-2',
        'lg:row-start-2',
        'lg:col-span-2',
        'grid',
        'grid-cols-1 sm:grid-cols-2',
        'sm:gap-x-9',
        'gap-y-7',
        'lg:items-center',
        'lg:ml-10'
      )}>
        {
          cards.map((infoBullet, index) => {
            return (
              <InfoBullet
                key={`why-kodemia-${index}`}
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
