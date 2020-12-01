
import React from 'react'
import Slider from 'react-slick'

export interface Ally {
  name: string;
  image: string;
  alt: string;
  href: string;
}
export interface Props {
  allies: Array<Ally>;
}

function SampleArrow () {
  return <div style={{ display: 'none' }} />
}

export default function CarrouselAlliances ({ allies = [] }: Props) {
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
    <div className='carrousel-alliances'>
      <Slider {...settings}>
        {allies.map((ally, index) => {
          if (!ally.href) {
            return (
              <img
                key={`ally-${index}`}
                src={ally.image}
                className='ally'
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
                className='a-ally'
              >
                <img
                  src={ally.image}
                  className='ally'
                  alt={ally.alt}
                />
              </a>
            )
          }
        })}
      </Slider>
    </div>
  )
}
