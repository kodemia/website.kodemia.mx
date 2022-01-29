
import React from 'react'
import classNames from 'classnames'

import H5 from 'components/H5'
import DescriptionParagraph from './DescriptionParagraph' // TODO: cambiar por Text component

export interface Props {
  icon: string,
  title: string,
  text: string,
  detail?: string
}

export default function InfoCard ({
  icon,
  title,
  text,
  detail
}: Props):JSX.Element {
  return (
    <div id='info-card'>
      <div className={classNames(
        'info-card-container',
        {
          'has-detail': detail
        }
      )}>
        <img
          src={icon}
          className={classNames(
          'ikon'
        )}/>
        <div className={classNames(
          'info-card-title'
        )}>
          <H5 isWhite>
            {title}
          </H5>
        </div>
        <div className={classNames(
          'text'
        )}>
          <DescriptionParagraph>
            {text}
          </DescriptionParagraph>
        </div>
        {detail &&
          <div className={classNames(
            'detail'
          )}>
            {detail}
          </div>}
      </div>
    </div>
  )
}
