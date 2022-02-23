
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

export default function TestimonialCard ({ testimonial, isActive }: Props):JSX.Element {
  return (
    <article className={classNames(
      // 'testimonial-card'
    )}>
      <div className={classNames(
        // 'testimonial-card-container',
        // 'bg-brand-black-dark',
        'border border-solid rounded-small',
        'grid',
        'grid-cols-1 lg:grid-cols-3',
        'h-full md:h-[317px] lg:h-[205px]',
        'max-h-min', // TODO: Comprobar comportamiento, en CSS está solo para mobile
        'max-w-full md:max-w-none', // TODO: Comprobar comportamiento, en CSS está solo para mobile
        'min-w-full md:min-w-0', // TODO: Comprobar comportamiento, en CSS está solo para mobile
        'py-6', // TODO: Comprobar comportamiento, en CSS está 25px
        'px-5',
        'w-full md:w-[637px] lg:w-[729px]', // Está en isActive y en !isActive
        {
          // active: (isActive),
          // inactive: (!isActive)
          'hidden lg:grid border-brand-error md:h-[277px] lg:h-[210px] md:my-5 md:mx-0 lg:my-4 lg:py-4 md:w-full lg:w-[729px]': !isActive,
          'border-brand-primary h-full md:h-[317px] lg:h-[240px] lg:m-0 min-h-max md:min-h-0 md:max-w-[637px] md:min-w-[599px] w-full lg:w-[729px]': isActive
        }
      )}
      >
        <div className={classNames(
          // 'testimonial-data'
          // 'bg-transparent',
          'grid',
          'grid-cols-6',
          'grid-rows-3 lg:grid-rows-5',
          'items-center',
          'w-full sm:w-2/3 lg:w-full',
          // 'max-w-[500px]',
          // 'md:mt-6 md:mr-0 md:mb-0 md:ml-6', // TODO: Comprobar comportamiento, en CSS está 25px
          // 'lg:w-[195px]'
        )}>
          <img
            src={testimonial.photo}
            className={classNames(
              // 'testimonial-photo'
              // 'auto-cols-auto',
              'col-span-2 lg:col-span-4',
              'row-span-3',
              'col-start-1',
              'row-start-1',
              'h-[95px] lg:h-[110px]',
              'object-cover',
              'rounded-full',
              'w-[95px] lg:w-[110px]',
              // 'mr-2'
              // 'mb-4',
              'self-center'
            )}
          />
          <ReactCountryFlag
            countryCode={testimonial.country}
            className={classNames(
              // 'flag'
              'col-span-1',
              'col-start-3 lg:col-start-5',
              'row-start-1 lg:row-start-3',
              'h-[28px]', // TODO: Comprobar comportamiento, en CSS está solo en mobile y tablet
              'ml-3 sm:ml-0',
              'lg:relative lg:-left-8',
              'self-end',
              'text-3xl', // TODO: Comprobar comportamiento, en CSS está solo en mobile y tablet
              'text-justify' // TODO: Comprobar comportamiento, en CSS está text-align: start en mobile y tablet
            )}
            style={{ fontSize: '2em' }}
          />
          <div className={classNames(
            // 'testimonial-name'
            // 'my-1 lg:my-[10px]', // TODO: Comprobar comportamiento, en CSS está 5px
            'col-span-4 lg:col-span-6',
            'col-start-3 lg:col-start-1',
            'row-start-2 lg:row-start-4',
            'ml-3 sm:ml-0',
            'min-w-[100px]' // TODO: Comprobar comportamiento, en CSS está solo en mobile
          )}>
            <H5 isWhite>
              {testimonial.name}
            </H5>
          </div>
          <p className={classNames(
            // 'testimonial-employment'
            'col-span-4 lg:col-span-6',
            'col-start-3 lg:col-start-1',
            'row-start-3 lg:row-start-5',
            'ml-3 sm:ml-0',
            'self-start',
            'text-brand-gray-light',
            'text-base leading-4 font-medium',
            {
              // 'md:grid lg:hidden': !isActive
            }
          )}>
            {testimonial.employment}
          </p>
        </div>
        <div className={classNames(
          'lg:col-span-3',
          'lg:col-start-2',
          'mt-5 lg:mt-0',
          'lg:ml-3',
          'self-center'
        )}>
          <p className={classNames(
            // 'quote'
            'text-brand-gray-light',
            'text-[15px] lg:text-base leading-5',
            {
              'text-sm': !isActive
            }
          )}>
            {testimonial.quote}
          </p>
        </div>

      </div>
    </article>
  )
}
