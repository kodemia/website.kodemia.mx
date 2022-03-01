
import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { builder } from '@builder.io/react';
import dayjs from 'dayjs'
import es from "dayjs/locale/es";

import EventCard from 'components/EventCard'
import Footer from 'components/Footer'
import H3 from 'components/H3'
import H5 from 'components/H5'
import Navbar from 'components/Navbar'
import PageSection from 'components/PageSection'
import Seo from 'components/SEO'

dayjs.locale(es);
export interface Event {
  name: string
  date: Date
  isLive: Boolean
  isPrivate: Boolean
  link: string
}

export interface Props {
  events: Array<Event>
}

export const getStaticProps = async () => {
  const date = Date.now()
  const results = await builder.getAll('evento')
  const events = results.map(event => event.data)
    .sort((a: any, b: any) => a.date - b.date)
    .filter((event: any) => event.date > date)

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
        'bg-events bg-no-repeat bg-cover bg-bottom',
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
          sectionClassName='max-h-screen'
          contentClassName={classNames(
            'flex justify-center',
            'flex-col md:flex-row',
            'md:flex-wrap',
            'gap-y-9 gap-x-0 md:gap-x-11 lg:gap-x-10'
          )}
        >
          {
            events.map((event, index) => (
              <EventCard
                className={classNames(
                  'md:max-w-[420px]',
                  'md:min-w-min',
                  'w-full md:w-2/5 lg:w-80',
                )}
                key={`event-${index}`}
                name={event.name}
                date={dayjs(event.date).format('DD MMMM').toString()}
                schedule={`${dayjs(event.date).format('HH:mm').toString()} hrs.`}
                text={event.isLive ? 'Conexión remota vía streaming' : 'Presencial, te esperamos 😎'}
                btnLabel={event.isPrivate ? 'Regístrate' : 'Ver evento'}
                link={event.link}
              />
            ))
          }
        </PageSection>
      <Footer />
    </>
  )
}
