import _ from 'lodash'
import React from 'react'
import classNames from 'classnames'
import { builder } from '@builder.io/react';

//My components
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import H5 from 'components/H5'
import H3 from 'components/H3'
import JobCard from 'components/JobCard'
import Seo from 'components/SEO'

import { Job } from 'types/common'

export interface Props {
  jobs: Job[]
}

export const getStaticProps = async () => {
  const results = await builder.getAll('job')
  const jobs: Job[] = results.map(event => event.data) as Job[]

  return {
    props: {
      jobs
    },
    revalidate: 60
  }
}

export default function Eventos({ jobs }: Props): JSX.Element {
  return (
    <>
      <Seo
        title='Kodemia | Empleos'
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
            Vacantes abiertas
          </H5>
          <div>
            <H3
              whiteText='Ayudanos a transformar'
              cyanText='vidas'
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
            _.isEmpty(jobs) &&
            <div className='text-center'>
              <h1 className={classNames('text-cyan-kd text-3xl pb-10')}>
                No tenemos vacantes por el momento 🤷‍♂️
              </h1>
              <p>
                Si te interesa trabajar con nostros mandanos un email <br/>
                <a
                  href="mailto:rockstars@kodemia.mx"
                  className='text-cyan-kd-dark'
                >
                  &nbsp; rockstars@kodemia.mx &nbsp;
                </a>
                <br/>
                y cuentanos por que te gustaría trabajar con nosotros
              </p>
            </div>
          }
          {
            jobs.map((job, index) => (
              <JobCard
                key={`event-${index}`}
                className={classNames(
                  'md:max-w-420',
                  'md:min-w-min',
                  'w-full md:w-2/5 lg:w-80'
                )}
                job={job}
              />
            ))
          }
        </section>
      </main>
      <Footer />
    </>
  )
}
