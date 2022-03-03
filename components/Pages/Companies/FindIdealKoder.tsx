
import React from 'react'
import classNames from 'classnames'

import H3 from 'components/H3'
import H5 from 'components/H5'
import InfoElement, { Props as InfoElementProps } from 'components/InfoElement'
import PageSection from 'components/PageSection'

export interface Props {
  idealKoder: {
    cards: Array<InfoElementProps>
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
        // 'find-ideal-koder'
        'bg-brand-black'
      )}
      contentClassName={classNames(
        // 'find-koder-container',
        // 'section-container'
        'grid',
        'grid-cols-1 lg:grid-cols-3',
        // 'columns-1 lg:columns-3',
        // 'lg:gap-x-8,'
      )}
    >
      <div className={classNames(
        // 'subject'
        'col-start-1',
        'row-start-1',
        'lg:col-span-3',
        'mb-10',
        'w-full sm:w-1/2',
        // 'max-w-xl' // TODO: comprobar si es el tamaño adecuado
      )}>
        <H5>
          {idealKoder.subtitle}
        </H5>
        <div className='max-w-[365px]'>   {/*// TODO: title class name*/}
          <H3
            whiteText={idealKoder.whiteTitle}
            cyanText={idealKoder.cyanTitle}
          />
        </div>
      </div>
      {/* <div className={classNames(
          // 'img-cont'
        )}> */}
      <img
        className={classNames(
          // 'image'
          'col-start-1',
          'row-start-2',
          'col-span-1',
          'h-[420px]',
          'mb-5',
          'lg:m-auto',
          'max-w-full',
          'object-cover',
          'rounded-small',
          'w-full'
        )}
        src={idealKoder.image}
        alt='koder ideal'
      />
      {/* </div> */}
      <div className={classNames(
        // 'cards'
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
          idealKoder.cards.map((infoElement, index) => {
            return (
              <InfoElement
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
