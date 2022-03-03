
import React from 'react'
import classNames from 'classnames'

import H3 from 'components/H3'
import H5 from 'components/H5'
import InfoBullet, { Props as InfoBulletProps } from 'components/InfoBullet'
import PageSection from 'components/PageSection'

export interface Props {
  talent: {
    cyanTitle: string
    cards: Array<InfoBulletProps>
    subtitle: string
    whiteTitle: string
  }
}

export default function TalentDevelopment({ talent }: Props): JSX.Element {
  return (
    <PageSection>
      <div className='max-w-[370px]'>
        <H5>
          {talent.subtitle}
        </H5>
        <H3
          cyanText={talent.cyanTitle}
          whiteText={talent.whiteTitle}
          isFirstCyan
        />
      </div>
      <div className={classNames(
        'grid',
        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        'gap-y-7 sm:gap-x-10',
        'mt-10'
      )}>
        {
          talent.cards.map((infoElement, index) => {
            return (
              <InfoBullet
                key={`talent-development-${index}`}
                icon={infoElement.icon}
                title={infoElement.title}
                text={infoElement.text}
              />
            )
          })
        }
      </div>
    </PageSection>
  )
}
