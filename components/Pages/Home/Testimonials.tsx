
import React, { useState } from 'react'
import classNames from 'classnames'

import H3 from 'components/H3'
import H5 from 'components/H5'
import TestimonialCard from 'components/TestimonialCard'

export interface Testimonial {
  photo: string
  country: string
  name: string
  employment: string
  quote: string
}

export interface Props {
  testimonials: Array<Testimonial>
  isGray?: boolean
}

export default function Testimonials ({ testimonials, isGray }: Props):JSX.Element {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0)

  const next = () => {
    const nextIndex = (activeTestimonialIndex + 1) > (testimonials.length - 1)
      ? 0
      : activeTestimonialIndex + 1
    setActiveTestimonialIndex(nextIndex)
  }

  const previous = () => {
    const previousIndex = (activeTestimonialIndex - 1) < 0
      ? testimonials.length - 1
      : activeTestimonialIndex - 1
    setActiveTestimonialIndex(previousIndex)
  }

  return (
    <section className={classNames(
      // 'testimonials'
    )}>
      <div className={classNames(
        // 'testimonials-wrapper',
        'flex',
        'justify-center',
        'w-full',
        {
          // 'is-gray': isGray
          'bg-brand-black': isGray
        }
      )}
      >
        <div className={classNames(
          // 'container-testimonials',
          'section-container',

          'max-w-full lg:max-w-[1086px]',
          'min-w-full lg:min-w-[719px]',

          'flex',
          'flex-col',
          'justify-center',
          'pt-20 md:pt-24',
          'px-11 md:px-20 lg:px-0',
          'pb-14 md:pb-20',
          'w-full'
        )}>
          <H5>
            Testimonios
          </H5>
          <H3
            whiteText='Nuestra'
            cyanText='comunidad'
          />
          <div className={classNames(
            // 'sliders',
            'flex',
            'h-60',
            'mt-11',
            'overflow-hidden',
            'relative',
            'w-full'
          )}>
            {
              testimonials.map((testimonial, index) => {
                return (
                  <div
                    className={classNames(
                      'testimonial',
                      '',
                      '',
                      {
                        // inactive: (activeTestimonialIndex !== index),
                        // active: (activeTestimonialIndex === index)
                        inactive: (activeTestimonialIndex !== index),
                        active: (activeTestimonialIndex === index)
                      }
                    )}
                    key={`testimonialSection-${index}`}
                  >
                    <TestimonialCard
                      testimonial={testimonial}
                      isActive={activeTestimonialIndex === index}
                    />
                  </div>
                )
              })
            }
          </div>
          <div className={classNames(
            'bar-buttons',
            '',
            ''
          )}>
            <div className={classNames(
              'bar',
              '',
              ''
            )}>
              <ul>
                {
                  testimonials.map((testimonial, index) => {
                    return (
                      <li
                        className={classNames(
                          'selected-bar',
                          '',
                          '',
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
            <div className={classNames(
              'container-buttons',
              '',
              ''
            )}>
              <img
                className={classNames(
                  'back',
                  '',
                  ''
                )}
                src='/icons/icon-back.svg'
                alt='back'
                onClick={() => previous()}
              />
              <img
                className={classNames(
                  'forward',
                  '',
                  ''
                )}
                src='/icons/icon-forward.svg'
                alt='forward'
                onClick={() => next()}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
