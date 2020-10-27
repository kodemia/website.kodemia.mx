
import React from 'react'

export interface Props {
  icon: string,
  heading: string,
  text: string

}

export default function InfoCard ({
  icon,
  heading,
  text
}: Props) {
  return (
    <div className='info-card'>
      <img src={icon} className='ikon' />
      <h2 className='heading'>{heading}</h2>
      <p className='text'>{text}</p>
    </div>
  )
};
