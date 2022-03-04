
import React from 'react'
import classNames from 'classnames'

import H3 from 'components/H3'
import H5 from 'components/H5'
import InfoBullet, { Props as InfoBulletProps } from 'components/InfoBullet'
import PageSection from 'components/PageSection'

export interface Props {
  findTalent: {
    cards: Array<InfoBulletProps>
    cyanTitle: string
    detail: string
    subtitle: string
    whiteTitle: string
  }
}

export default function HelpFindTalent ({ findTalent }: Props): JSX.Element {
  return (
    <PageSection>
      <div className={classNames(
        'max-w-sm'
      )}>
        <H5>
          {findTalent.subtitle}
        </H5>
        <H3
          whiteText={findTalent.whiteTitle}
          cyanText={findTalent.cyanTitle}
        />
      </div>
      <p className={classNames(
        'text-brand-gray-light text-base font-medium',
        'mt-9',
        'max-w-2xl'
      )}>
        {findTalent.detail}
      </p>
      <div className={classNames(
        'grid',
        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        'gap-y-7 sm:gap-x-10',
        'mt-10'
      )}>
        {
          findTalent.cards.map((infoElement, index) => {
            return (
              <InfoBullet
                key={`find-talent-${index}`}
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
