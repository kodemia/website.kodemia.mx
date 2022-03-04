
import React from 'react'
import classNames from 'classnames'

import H3 from 'components/H3'
import H5 from 'components/H5'
import InfoBullet, { Props as InfoBulletProps } from 'components/InfoBullet'
import PageSection from 'components/PageSection'

export interface Props {
  idealKoder: {
    cards: Array<InfoBulletProps>
    cyanTitle: string
    image: string
    subtitle: string
    whiteTitle: string
  }
}

export default function FindIdealKoder ({ idealKoder }: Props): JSX.Element {
  return (
    <PageSection
      sectionClassName={classNames(
        'bg-brand-black'
      )}
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
        'w-full sm:w-1/2'
      )}>
        <H5>
          {idealKoder.subtitle}
        </H5>
        <div className='max-w-[365px]'>
          <H3
            whiteText={idealKoder.whiteTitle}
            cyanText={idealKoder.cyanTitle}
          />
        </div>
      </div>
      <img
        className={classNames(
          'col-start-1',
          'row-start-2',
          'col-span-1',
          'h-[460px]',
          'max-w-full',
          'object-cover',
          'rounded-small',
          'w-full'
        )}
        src={idealKoder.image}
        alt='koder ideal'
      />
      <div className={classNames(
        'lg:col-start-2',
        'lg:row-start-2',
        'lg:col-span-2',
        'grid',
        'grid-cols-1 sm:grid-cols-2',
        'sm:gap-x-9',
        'gap-y-7',
        'lg:ml-10',
        'mt-10 lg:mt-0'
      )}>
        {
          idealKoder.cards.map((infoElement, index) => {
            return (
              <InfoBullet
                key={`ideal-koder-${index}`}
                icon={infoElement.icon}
                title={infoElement.title}
                text={infoElement.text}
                detail={infoElement.detail}
              />
            )
          })
        }
      </div>
    </PageSection>
  )
}
