import React from 'react'
import classNames from 'classnames'
import { builder } from '@builder.io/react'

import H3 from 'components/H3'
import H5 from 'components/H5'
import MentorCard from 'components/MentorCard'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

import { Mentor } from 'types/common'
import SEO from 'components/SEO'

export interface Props {
  mentors: Array<Mentor>
}

export const getStaticProps = async () => {
  const results  = await builder.getAll('mentor', {limit: 100})
  const mentors = results.map(mentor => mentor.data)
  return {
    props: {
      mentors
    },
    revalidate: 60
  }
}

export default function Mentores ({ mentors }: Props):JSX.Element {
  return (
    <>
      <SEO
        title='Kodemia | Mentores'
        description='Conoce a tus mentores'
      />
      <Navbar />
      <header className={classNames(
        'bg-mentors bg-cover bg-no-repeat bg-center',
        'flex flex-col',
        'justify-center',
        'desktop:items-center',
        'h-80',
        'min-h-430'
      )}>
        <div className={classNames(
          'px-12 desktop:px-0',
          'max-w-1086',
          'w-full'
        )}
        >
          <H5>
            Mentores Kodemia
          </H5>
          <div>
            <H3
              whiteText='Conoce a tus'
              cyanText='Mentores'
            />
          </div>
        </div>
      </header>
      <main className={classNames(
        'bg-black-kd',
        'flex justify-center',
        'desktop:items-center',
        'pt-24 px-7 tablet:px-12 pb-14',
      )}>
        <section
          className={classNames(
            'tablet:masonry-2-col laptop:masonry-3-col',
            'max-w-1086',
            'w-full',
          )}
        >
          {
            mentors.map((mentor, index) => (
              <MentorCard
                className={classNames(
                  'avoid-break-inside',
                  'mb-9',
                )}
                key={`mentor-${index}`}
                mentor={mentor}
              />
            ))
          }
        </section>
      </main>
      <Footer />
    </>
  )
}
