import _ from 'lodash'
import React from 'react'
import classNames from 'classnames'
import { builder } from '@builder.io/react';

<<<<<<< HEAD
import EventCard from 'components/EventCard'
=======
>>>>>>> project-refactor
import Footer from 'components/Footer'
import H3 from 'components/H3'
import H5 from 'components/H5'
import Navbar from 'components/Navbar'
<<<<<<< HEAD
import PageSection from 'components/PageSection'
=======
import EventCard from 'components/EventCard'
>>>>>>> project-refactor
import Seo from 'components/SEO'

import { Event } from 'types/common'

export interface Props {
  events: Array<Event>
}

export const getStaticProps = async () => {
  const date = Date.now()
  const results = await builder.getAll('evento')
  const events: Event[] = results.map(event => event.data)
    .sort((a: any, b: any) => a.date - b.date)
    .filter((event: any) => event.date > date) as Event[]

  return {
    props: {
      events
    },
    revalidate: 60
  }
}

export default function Eventos ({ events }: Props): JSX.Element {
  return (
    <>
      <Seo
        title='Kodemia | Eventos'
      />
      <Navbar />
      <header className={classNames(
        'bg-events-sm md:bg-events-lg bg-no-repeat bg-cover bg-bottom',
        'flex flex-col',
        'justify-center xl:items-center',
        'h-96',
        'max-h-[430px]',
        )}>
        <div className={classNames(
          'px-6 md:px-16 lg:px-12 xl:px-0',
          'lg:max-w-screen-xl',
          'w-full'
        )}
        >
          <H5>
            Eventos Kodemia
          </H5>
          <div>
            <H3
              whiteText='No te pierdas'
              cyanText='ninguno'
            />
          </div>
        </div>
      </header>
        <PageSection
          sectionClassName='min-h-screen'
          contentClassName={classNames(
            'flex justify-center',
            'flex-col md:flex-row',
            'md:flex-wrap',
            'gap-y-9 gap-x-0 md:gap-x-11 lg:gap-x-10'
          )}
        >
          {
            _.isEmpty(events) &&
            <h1 className={classNames('text-cyan-kd animate-bounce text-3xl')}> ¡Más eventos, próximamente! </h1>
          }
          {
            events.map((event, index) => (
              <EventCard
                key={`event-${index}`}
                className={classNames(
                  'md:max-w-[420px]',
                  'md:min-w-min',
                  'w-full md:w-2/5 lg:w-80',
                )}
                event={event}
              />
            ))
          }
        </PageSection>
      <Footer />
    </>
  )
}
