
import React from 'react'
import Image from 'next/image'
// My components
import H2 from '../../H2'
import H3 from '../../H3'
import TextCursor from '../../TextCursor'

export interface Data {
  whiteTitle: string
  cyanTitle: string
  week: string
  image1: string
  image2: string
  description: string
}

export interface Props{
  dataManipulation: Array<Data>
}
export default function DataManipulation ({ dataManipulation }: Props) {
  return (
    <section className='columns is-multiline data-manipulation-container'>
      <div className='column is-12'>
        <H2
          whiteText='Data Manipulation'
          cyanText=''
          isFirstCyan
        />
      </div>
      {
        dataManipulation.map((data, index) => (
          <article
            key={`data-manipulation-${index}`}
            className='column is-full data-manipulation'
          >
            <div className='columns is-multiline wrapper'>
              <div className='column is-12-desktop is-12-tablet data-container '>
                <H3 text={data.week} />
                <h5 className='title'>
                  {data.whiteTitle}
                  <span>
                    <TextCursor text={data.cyanTitle} />
                  </span>
                </h5>
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
                  width={120}
                  height={120}
                />
              </div>
              <div className='column is-8-desktop is-12-tablet data-manipulation-data'>
                <p className='description-data'>
                  {data.description}
                </p>
              </div>
            </div>
          </article>
        ))
      }
    </section>
  )
}
