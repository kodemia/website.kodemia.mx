
import React from 'react'
import classNames from 'classnames'

export interface Props {
  video: string
}

export default function BgVideo ({ video }: Props): JSX.Element {
  return (
    <div className={classNames(
      'h-full',
      '-z-10'
    )}>
      <video
        className={classNames(
          'h-full',
          'object-cover',
          'w-screen'
        )}
        autoPlay
        loop
        muted
      >
        <source
          src={video}
        />
      </video>
    </div>
  )
}
