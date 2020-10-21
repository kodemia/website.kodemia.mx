
import React from 'react'

// my component
import Button from '../components/Button'

export interface Props {
  title: string
  content: string
}

export default function HeroCard ({ title, content }: Props) {
  const finalPosition = title.length - 1
  const newTitle = title.slice(0, finalPosition)

  return (
    <div className='hero-card'>
      <h1 className='hero-title'>
        {newTitle}<span className='final-character'>{title[title.length - 1]}</span>
      </h1>
      <p className='hero-context'>{content}</p>
      <Button isPrimary label='Conoce nuestros Bootcamps' />
    </div>
  )
};
