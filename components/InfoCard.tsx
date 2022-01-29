
import React from 'react'
import classNames from 'classnames'

import H5 from 'components/H5'
import Text from 'components/Text'

export interface Props {
  icon: string,
  title: string,
  text: string,
  detail?: string
}

export default function InfoCard ({ detail, icon, title, text }: Props) {
  return (
    <div id='info-card'>
      <div className={classNames('info-card-container', {
        'has-detail': detail
      })}
      >
        <img src={icon} className='ikon' />
        <div className='info-card-title'>
          <H5 isWhite>
            {title}
          </H5>
        </div>
        <div className='text'>
          <Text>
            {text}
          </Text>
        </div>
        {detail &&
          <div className='detail'>
            {detail}
          </div>}
      </div>
    </div>
  )
}
