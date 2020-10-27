
import React from 'react'
// my components
import Button from '../components/Button'
import H1 from './H1'

export interface Props {
  title: string
  content: string
}

export default function HeroCard ({ title, content }: Props) {
  return (
    <div className='hero-card'>
      <H1 text={title} />
      <p className='hero-content'>{content}</p>
      <Button isPrimary label='Conoce nuestros Bootcamps' />
    </div>
  )
};
