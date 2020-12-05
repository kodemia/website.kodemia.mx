
import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import classnames from 'classnames'

export interface Props {
  testimonial : {
    photo: string
    country: string
    name: string
    employment: string
    quote: string
  }
  isActive: Boolean
}

export default function TestimonialCard ({ testimonial, isActive }:Props) {
  return (
    <div className='testimonial-card'>
      <div className={classnames(
        'testimonial-card-container',
        {
          inactive: (!isActive),
          active: (isActive)
        }
      )}
      >
        <div className='testimonial-data'>
          <img src={testimonial.photo} className='testimonial-photo' />
          <ReactCountryFlag
            countryCode={testimonial.country}
            className='flag'
            style={{ fontSize: '2em' }}
          />
          <h6 className='testimonial-name'>
            {testimonial.name}
          </h6>
          <p className='testimonial-employment'>
            {testimonial.employment}
          </p>
        </div>
        <div className='koder-quote '>
          <p className='quote'>{testimonial.quote}</p>
        </div>
      </div>
    </div>
  )
}
