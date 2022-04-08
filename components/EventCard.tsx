
import React from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'

import Button from 'components/Button'
import Card from 'components/Card'
import H4 from 'components/H4'

import { Event } from 'types/common'
import * as tracker from 'lib/tracker'

export interface Props {
  event: Event
  className?: string
}

export default function EventCard({ event, className }: Props) {
  return (
    <Card
      className={classNames(
        'flex flex-col justify-between',
        className
    )}
      isBordered
    >
        <H4>
          {event.name}
        </H4>
      <div className='mt-4'>
        <h5 className={classNames(
          'text-brand-primary text-brand-h5 font-medium'
        )}
        >
          {dayjs(event.date).format('DD MMMM').toString()}
        </h5>
        <p className={classNames(
          'text-brand-gray-light text-brand-h5 font-medium'
        )}
        >
          {`${dayjs(event.date).format('HH:mm').toString()} hrs.`}
        </p>
        <p className={classNames(
          'mb-5',
          'text-brand-gray-light text-base font-medium'
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
    </Card>
  )
}
