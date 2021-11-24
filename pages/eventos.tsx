import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { builder } from '@builder.io/react';
import dayjs from 'dayjs'
import es from "dayjs/locale/es";
//My components
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import H5 from 'components/H5'
import H3 from 'components/H3'
import CardEvent from 'components/CardEvent'
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

export default function Eventos({ events }: Props) {
  return (
    <>
      <Seo
        title='Kodemia | Eventos'
      />
      <Navbar />
      <header className={classNames(
        'bg-no-repeat bg-cover bg-bottom bg-events h-80 min-h-430-px',
        'flex flex-col justify-center xl:items-center'
      )}>
        <div className={classNames('px-14 max-w-1086-px w-full xl:px-0')}>
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
        'bg-black-kd p-12 lg:p-14',
        'flex justify-center xl:items-center'
      )}>
        <section className={classNames(
          'max-w-1086-px w-full',
          'flex flex-wrap justify-center'
        )}>
          {
            events.map((event, index) => (
              <article key={`event-${index}`}
                className={classNames('w-full md:w-80 ', 'my-5 mx-3')}>
                <CardEvent key={index}
                  name={event.name}
                  date={dayjs(event.date).format('DD MMMM ').toString()}
                  schedule={`${dayjs(event.date).format('HH:mm').toString()} hrs.`}
                  text={event.isLive ? 'Conexión remota vía streaming' : 'Presencial, te esperamos 😎'}
                  btnLabel={event.isPrivate ? 'Regístrate' : 'Ver evento'}
                  link={event.link}
                />
              </article>
            ))
          }
        </section>
      </main>
      <Footer />
    </>
  )
}
