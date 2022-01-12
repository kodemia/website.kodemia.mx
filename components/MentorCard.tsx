import React, { useState } from 'react'
import classNames from 'classnames'
import _ from 'lodash'

import H4 from 'components/H4'
import Pill from 'components/Pill'

import { Mentor } from 'types/common'
import * as tracker from 'lib/tracker'

export interface Props {
  className?: string
  mentor: Mentor
}

export default function MentorCard ({ className, mentor }: Props):JSX.Element {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const [skillsList] = _.chunk(mentor.skills, 6)
  const experience = mentor.yearsOfExperience === 1
    ? `${mentor.yearsOfExperience} año`
    : `${mentor.yearsOfExperience} años`

  return (
    <div className={classNames(
      className,
      'border border-solid rounded-xl',
      'border-gray-kd-light hover:border-cyan-kd-dark',
      'flex flex-col justify-start',
      'h-fit',
      'p-4',
      'w-full'
      )}>
      <div className={classNames(
        'mb-4'
      )}>
         <img
          className={classNames(
            'object-cover bg-center bg-no-repeat',
            'h-60',
            'w-full'
          )}
          src={mentor.photography}
          alt='mentor-photography'
        />
      </div>
      <H4>
        {mentor.name}
      </H4>
      <p className={classNames(
        'mt-1',
        'text-base text-cyan-kd opacity-80 font-medium'
      )}>
        {`${mentor.jobTitle} en ${mentor.companyName}`}
      </p>
      <p className={classNames(
        'mt-2',
        'text-base text-white font-medium'
      )}>
        {`Experiencia: ${experience}`}
      </p>
      <div className={classNames(
        'flex flex-row',
        'flex-wrap',
        'justify-between',
        'mt-5',
        'w-28'
      )}>
        <a
          href={`https://github.com/${mentor.github}`}
          rel='noopener noreferrer'
          target='_blank'
          onClick={() => {tracker.onMentorLinkClicked('Github')}}
        >
          <img
            className='w-7'
            src='/icons/social-media-gh.svg'
            alt='github-logo'
          />
        </a>
        <a
          href={`https://www.linkedin.com/in/${mentor.linkedin}`}
          rel='noopener noreferrer'
          target='_blank'
          onClick={() =>{tracker.onMentorLinkClicked('LinkedIn')}}
        >
          <img
            className='w-7'
            src='/icons/social-media-in.svg'
            alt='linkedin-logo'
          />
        </a>
        <a
          href={`https://twitter.com/${mentor.twitter}`}
          rel='noopener noreferrer'
          target='_blank'
          onClick={() =>{tracker.onMentorLinkClicked('Twitter')}}
        >
          <img
            className='w-7'
            src='/icons/social-media-tw.svg'
            alt='twitter-logo'
          />
        </a>
      </div>
      <div>
        <p className={classNames(
          'mt-5',
          'text-base text-gray-kd-lighter font-normal',
          {'line-clamp-3': !isExpanded},
          {'line-clamp-none': isExpanded}
        )}>
          {mentor.description}
        </p>
        <a
          className={classNames(
            'text-cyan-kd',
            'underline underline-offset-2',
          )}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {
            isExpanded
            ? 'Leer menos'
            : 'Leer más'
          }
        </a>
      </div>
      <p className={classNames(
        'mt-5',
        'text-base font-medium'
      )}>
        Skills
      </p>
      <div className={classNames(
        'grid grid-cols-2',
        'gap-x-3',
        'gap-y-2',
        'mt-4'
      )}>
        {
          skillsList.map((skill, index) => (
            <Pill
              key={`skill-${index}`}
              skill={skill}
            />
          ))
        }
      </div>
    </div>
  )
}
