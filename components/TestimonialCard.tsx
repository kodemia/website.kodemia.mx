
import React from 'react'

export interface Props {
  testimonial : {
    photo: string
    nationality: string
    name: string
    employment: string
    quote: string
  }
}

export default function TestimonialCard ({ testimonial }:Props) {
  return (
    <div className='testimonial-card'>
      <div className='testimonial-data'>
        <div className='photo-flag'>
          <img src={testimonial.photo} className='testimonial-photo' />
          {testimonial.nationality === 'mexican' ? <p className='flag'> 🇲🇽 </p> : ''}
        </div>
        <h6 className='testimonial-name'>{testimonial.name}</h6>
        <p className='testimonial-employment'>{testimonial.employment}</p>
      </div>
      <div className='koder-quote '>
        <p className='quote'>{testimonial.quote}</p>
      </div>
    </div>
  )
}
