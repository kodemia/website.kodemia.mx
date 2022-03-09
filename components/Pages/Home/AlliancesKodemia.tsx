
import React from 'react'
import classNames from 'classnames'

import CarrouselAlliances from 'components/CarrouselAlliances'
import H3 from 'components/H3'
import H5 from 'components/H5'
import PageSection from 'components/PageSection'

export interface Ally {
  name: string;
  image: string;
  alt: string;
  href: string;
}

export interface Props {
  allies: Array<Ally>;
  cyanTitle: string
  subtitle: string
  isBlack?: boolean
  whiteTitle: string
}

export default function AllianceKodemia({ allies = [], cyanTitle, subtitle, whiteTitle, isBlack }: Props) {
  return (
    <PageSection sectionClassName='bg-brand-black'>
      <H5>{subtitle}</H5>
      <div className="max-w-48 lg:max-w-full">
        <H3 cyanText={cyanTitle} whiteText={whiteTitle} isFirstCyan />
      </div>
      <CarrouselAlliances allies={allies} hasContent={!isBlack} />
      <div className={classNames(
        "lg:hidden w-full",
        "flex flex-col md:flex-wrap md:justify-between",
        "my-6 md:mt-6 md:h-[910px]"
      )}>
        {allies.map((ally, index) => {
          if (!ally.href) {
            return (
              <div className="h-32 md:mx-auto" key={`ally-${index}`}>
                <img src={ally.image} className="h-32 w-full lg:w-64" alt={ally.alt} />
              </div>
            );
          } else {
            return (
              <div className="h-32 md:mx-auto" key={`ally-${index}`}>
                <a
                  href={ally.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={ally.image} className="h-32 w-full lg:w-64" alt={ally.alt} />
                </a>
              </div>
            );
          }
        })}
      </div>
    </PageSection >
  );
}
