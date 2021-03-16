
import React from 'react'
import classnames from 'classnames'

export interface Props {
  icon: string,
  title: string,
  text: string,
  detail?: string
}

export default function InfoCard ({ detail, icon, title, text }: Props) {
  return (
    <div id='info-card'>
      <div className={classnames('info-card-container', {
        'has-detail': detail
      })}
      >
        <img src={icon} className='ikon' />
        <h3 className='info-card-title'>{title}</h3>
        <p className='text'>{text}</p>
        {detail && <div className='detail'>{detail}</div>}
      </div>
    </div>
  )
}
