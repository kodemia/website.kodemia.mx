
import React from 'react'
import classnames from 'classnames'
// My components
import H5 from './H5'
import DescriptionParagraph from './DescriptionParagraph'

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
        <div className='info-card-title'>
          <H5 text={title} isWhite />
        </div>

        <div className='text'>
          <DescriptionParagraph children={text} />
        </div>
        {detail && <div className='detail'>{detail}</div>}
      </div>
    </div>
  )
}
