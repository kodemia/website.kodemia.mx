
import React, { useState } from 'react'
import classnames from 'classnames'
// My components
import H2 from '../../H2'
import H3 from '../../H3'
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
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0)

  const next = () => {
    const nextIndex = (activeTestimonialIndex + 1) > (testimonials.length - 1)
      ? 0
      : activeTestimonialIndex + 1
    setActiveTestimonialIndex(nextIndex)
  }

  const previuos = () => {
    const previousIndex = (activeTestimonialIndex - 1) < 0
      ? testimonials.length - 1
      : activeTestimonialIndex - 1
    setActiveTestimonialIndex(previousIndex)
  }

  return (
    <section className='testimonials '>
      <div className='container-testimonials section-container'>
        <H3 text='Testimonios' />
        <H2 whiteText='Nuestra' cyanText='comunidad' />
        <div className='sliders'>
          {
            testimonials.map((testimonial, index) => {
              return (
                <div
                  className={classnames(
                    'testimonial',
                    {
                      inactive: (activeTestimonialIndex !== index),
                      active: (activeTestimonialIndex === index)
                    }
                  )}
                  key={`testimonialSection-${index}`}
                >
                  <TestimonialCard testimonial={testimonial} isActive={activeTestimonialIndex === index} />
                </div>
              )
            })
          }
        </div>
        <div className='bar-buttons'>
          <div className='bar'>
            <ul>
              {
                testimonials.map((testimonial, index) => {
                  return (
                    <li
                      className={classnames(
                        'selected-bar',
                        {
                          inactive: (activeTestimonialIndex !== index),
                          active: (activeTestimonialIndex === index)
                        }
                      )}
                      key={`testimonial-${index}`}
                    />
                  )
                })
              }
            </ul>
          </div>
          <div className='container-buttons'>
            <img
              className='back'
              src='/icons/icon-back.svg'
              alt='back'
              onClick={() => previuos()}
            />
            <img
              className='forward'
              src='/icons/icon-forward.svg'
              alt='forward'
              onClick={() => next()}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
