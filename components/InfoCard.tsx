
import React from 'react'

export interface Props {
  icon: string,
  title: string,
  text: string, 
  detail?: string
}

export default function InfoCard ({ detail, icon, title, text }: Props) {
  return (
    <>
      <div className='info-card'>
        <img src={icon} className='ikon' />
        <h2 className='info-card-title'>{title}</h2>
        <p className='text'>{text}</p>
      </div>
      {detail && <div className='detail'>{detail}</div>}
    </>
  )
}
