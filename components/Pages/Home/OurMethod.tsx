
import React from 'react'
import { deflate } from 'zlib'
// My component
import InfoCard from '../../InfoCard'

export interface Cards {
  title: string,
  text: string,
  image: string
}

export interface Props {
  title: string,
  keywords: string,
  text: string,
  cards: Array<Cards>
}

export default function OurMethod ({
  infoOurMethod : {
    title,
  keywords,
  text,
  cards
  }
}: Props) {

  console.log(title)
  return (
    <section>
      <h1>{title}</h1>
    </section>
  )
}
