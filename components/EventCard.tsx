import React from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'

// My components
import H4 from 'components/H4'
import Button from 'components/Button'

import { Event } from 'types/common'
import * as tracker from 'lib/tracker'

export interface Props {
  event: Event
  className?: string
}

export default function EventCard({ event, className }: Props) {
  return (
    <div className={classNames(
      className,
      'border border-solid rounded-xl',
      'border-gray-kd-light hover:border-cyan-kd',
      'flex flex-col justify-between',
      'p-4',
      'w-full'
    )}>
      <div>
        <H4>
          {event.name}
        </H4>
      </div>
      <div className={classNames('mt-4')}>
        <h5 className={classNames(
          'text-cyan-kd text-h5 font-medium'
        )}
        >
          {dayjs(event.date).format('DD MMMM').toString()}
        </h5>
        <p className={classNames(
          'text-gray-kd-light text-h5 font-medium'
        )}
        >
          {`${dayjs(event.date).format('HH:mm').toString()} hrs.`}
        </p>
        <p className={classNames(
          'mb-5',
          'text-gray-kd-light font-medium'
        )}
        >
          {event.isLive ? 'Conexión remota vía streaming' : 'Presencial, te esperamos 😎'}
        </p>
        <Button
          isPrimary
          label={event.isPrivate ? 'Regístrate' : 'Ver evento'}
          href={event.link}
          onClick={() => tracker.onEventButtonClicked(event)}
        />
      </div>
    </div>
  )
}
