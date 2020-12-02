
import React from 'react'
// My components
import TestimonialCard from '../../TestimonialCard'

export interface Testimonial {
  photo: string
  country: string
  name: string
  employment: string
  quote: string
}

export interface Props {
  testimonials: Array<Testimonial>
}

export default function Testimonials ({ testimonials }: Props) {
  return (
    <section className='testimonials'>
      <div className='slider'>
        {
          testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`testimonial-${index}`}
              testimonial={testimonial}
            />
          ))
        }
      </div>
    </section>
  )
}
