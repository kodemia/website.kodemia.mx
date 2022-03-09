import React from 'react'
import Slider from 'react-slick'
import classnames from 'classnames'

export interface Ally {
  name: string;
  image: string;
  alt: string;
  href: string;
}
export interface Props {
  allies: Array<Ally>;
  hasContent?: boolean
}

function SampleArrow() {
  return <div className='hidden' />
}

export default function CarrouselAlliances({ allies = [], hasContent }: Props) {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 10,
    cssEase: 'linear',
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />
  }

  return (
    <div className='carrousel'>
      <div className={classnames(
        'hidden lg:block relative',
        'mt-12 mb-5',
        'before:left-0 before:top-0',
        'after:right-0 after:top-0 after:transform after:rotate-180',
        'before:absolute before:w-24 before:h-32 before:content-[""] before:z-20',
        'after:absolute after:w-24 after:h-32 after:content-[""] after:z-20',
        'before:bg-gradient-to-r from-brand-black to-transparent',
        'after:bg-gradient-to-r from-brand-black to-transparent',
        `${!hasContent && 'before:content-none after:content-none'}`,
      )}
      >
        <Slider {...settings}>
          {allies.map((ally, index) => {
            if (!ally.href) {
              return (
                <img
                  key={`ally-${index}`}
                  src={ally.image}
                  className='w-full focus:outline-none'
                  alt={ally.alt}
                />
              )
            } else {
              return (
                <a
                  key={`ally-${index}`}
                  href={ally.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='focus:outline-none'
                >
                  <img
                    src={ally.image}
                    className='w-full focus:outline-none'
                    alt={ally.alt}
                  />
                </a>
              )
            }
          })}
        </Slider>
      </div>
    </div>
  )
}
