
import React from 'react'

import H3 from 'components/H3'
import H5 from 'components/H5'
import InfoBullet, { Props as InfoBulletProps } from 'components/InfoBullet'
import PageSection from 'components/PageSection'
import classNames from 'classnames'

export interface Props {
  achievement: {
    cards: Array<InfoBulletProps>
    cyanTitle: string
    subtitle: string
    whiteTitle: string
  }
}

export default function Goals ({ achievement }: Props): JSX.Element {
  return (
    <PageSection contentClassName='flex flex-col'>
      <div className='max-w-[350px]'>
        <H5>
          {achievement.subtitle}
        </H5>
        <H3
          whiteText={achievement.whiteTitle}
          cyanText={achievement.cyanTitle}
        />
      </div>
      <div className={classNames(
        'grid',
        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        'gap-y-5 sm:gap-x-8',
        'mt-10'
      )}>
        {
          achievement.cards.map((infoBullet, index) => {
            return (
              <InfoBullet
                key={`achievement-${index}`}
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
