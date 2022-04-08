
import React from 'react'
import classNames from 'classnames'

import H3 from 'components/H3'
import H5 from 'components/H5'
import InfoBullet, { Props as InfoBulletProps } from 'components/InfoBullet'
import PageSection from 'components/PageSection'
import Text from 'components/Text'

export interface Info {
  title: string
  keywords: string
  text: string
  cards: Array<InfoBulletProps>
}

export interface Props {
  ourMethod: Info
}

export default function OurMethod ({ ourMethod: { title, keywords, text, cards } }: Props): JSX.Element {
  return (
    <PageSection sectionClassName='bg-brand-black'>
      <H5>
        Nuestro Método
      </H5>
      <div className='max-w-[365px]'>
        <H3
          whiteText={title}
          cyanText={keywords}
        />
      </div>
      <div className={classNames(
        'my-9',
        'max-w-full lg:max-w-[730px]'
      )}>
        <Text>
          {text}
        </Text>
      </div>
      <div className={classNames(
        'grid',
        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        'gap-y-7 sm:gap-x-14'
      )}>
        {cards.map((infoBullet, index) => {
          return (
            <InfoBullet
              key={`our-method-${index}`}
              icon={infoBullet.icon}
              title={infoBullet.title}
              text={infoBullet.text}
            />
          )
        })}
      </div>
    </PageSection>
  )
}
