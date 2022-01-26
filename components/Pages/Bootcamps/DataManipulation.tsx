
import React from 'react'
import Image from 'next/image'
// My components
import H2 from 'components/H2'
import H3 from 'components/H3'
import H5 from 'components/H5'
import Text from 'components/Text'

export interface Data {
  whiteTitle: string
  cyanTitle: string
  week: string
  image1: string
  image2: string
  description: string
}

export interface Props {
  dataManipulation: Array<Data>
}
export default function DataManipulation ({ dataManipulation }: Props) {
  return (
    <section className='columns is-multiline data-manipulation-container'>
      <div className='column is-12'>
        <H2>
          Data Manipulation
        </H2>
      </div>
      {
        dataManipulation.map((data, index) => (
          <article
            key={`data-manipulation-${index}`}
            className='column is-full data-manipulation'
          >
            <div className='columns is-multiline wrapper'>
              <div className='column is-12-desktop is-12-tablet data-container '>
                <H5>
                  {data.week}
                </H5>
                <H3
                  whiteText={data.whiteTitle}
                  cyanText={data.cyanTitle}
                />
              </div>
              <div className='column is-4-desktop is-12-tablet  is-flex images'>
                <Image
                  src={data.image1}
                  alt='data-pandas'
                  width={120}
                  height={120}
                />
                <Image
                  src={data.image2}
                  alt='data-scrapy'
                  width={100}
                  height={100}
                />
              </div>
              <div className='column is-8-desktop is-12-tablet data-manipulation-data'>
                <Text>
                  {data.description}
                </Text>
              </div>
            </div>
          </article>
        ))
      }
    </section>
  )
}
