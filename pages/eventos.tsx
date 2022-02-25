import _ from 'lodash'
import React from 'react'
import classNames from 'classnames'
import { builder } from '@builder.io/react';

//My components
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import H5 from 'components/H5'
import H3 from 'components/H3'
import CardEvent from 'components/EventCard'
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
      events: [
        {
          date: Date.now(),
          isLive: true,
          isPrivate: false,
          link: '',
          name: 'El evento falso'
        }
      ]
    },
    revalidate: 60
  }
}

export default function Eventos({ events }: Props): JSX.Element {
  return (
    <>
      <Seo
        title='Kodemia | Eventos'
      />
      <Navbar />
      <header className={classNames(
        'bg-events bg-no-repeat bg-cover bg-bottom',
        'flex flex-col',
        'justify-center xl:items-center',
        'h-80',
        'min-h-430'
      )}>
        <div className={classNames(
          'px-12 xl:px-0',
          'max-w-1086',
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
      <main className={classNames(
        'bg-black-kd',
        'pt-24 px-12 pb-16',
        'flex justify-center',
        'desktop:items-center',

      )}>
        <section className={classNames(
          'flex flex-col md:flex-row',
          'md:flex-wrap',
          'gap-y-9',
          'gap-x-0 md:gap-x-11 lg:gap-x-10',
          'justify-center',
          'max-w-1086',
          'w-full',
        )}>
          {
            _.isEmpty(events) &&
            <h1 className={classNames('text-cyan-kd animate-bounce text-3xl')}> ¡Más eventos, próximamente! </h1>
          }
          {
            events.map((event, index) => (
              <CardEvent
                key={`event-${index}`}
                className={classNames(
                  'md:max-w-420',
                  'md:min-w-min',
                  'w-full md:w-2/5 lg:w-80'
                )}
                event={event}
              />
            ))
          }
        </section>
      </main>
      <Footer />
    </>
  )
}
