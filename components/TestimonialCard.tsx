
import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import classNames from 'classnames'

import H5 from 'components/H5'

export interface Props {
  testimonial: {
    photo: string
    country: string
    name: string
    employment: string
    quote: string
  }
  isActive: Boolean
}

export default function TestimonialCard ({ testimonial, isActive }: Props) {
  return (
    <article className={classNames(
      'testimonial-card'
    )}>
      <div className={classNames(
        'testimonial-card-container',
        {
          inactive: (!isActive),
          active: (isActive)
        }
      )}
      >
        <div className={classNames(
          'testimonial-data'
        )}>
          <img
            src={testimonial.photo}
            className={classNames(
              'testimonial-photo'
            )}
          />
          <ReactCountryFlag
            countryCode={testimonial.country}
            className={classNames(
              'flag'
            )}
            style={{ fontSize: '2em' }}
          />
          <div className={classNames(
            'testimonial-name'
          )}>
            <H5 isWhite>
              {testimonial.name}
            </H5>
          </div>
          <p className={classNames(
            'testimonial-employment'
          )}>
            {testimonial.employment}
          </p>
        </div>
        <div className={classNames(
          'koder-quote'
        )}>
          <p className={classNames(
            'quote'
          )}>
            {testimonial.quote}
          </p>
        </div>
      </div>
    </article>
  )
}
