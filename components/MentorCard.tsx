import React, { useState } from 'react'
import classNames from 'classnames'

import H4 from 'components/H4'
import Pill from 'components/Pill'

import { Mentor } from 'types/common'
import Skill from 'config/mentor-skills'
import * as tracker from 'lib/tracker'

export interface Props {
  className?: string
  mentor: Mentor
}


export default function MentorCard ({ className, mentor }: Props):JSX.Element {
  // console.log('mentor: ', mentor)
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  return (
    <div className={classNames(
      className,
      'border border-solid rounded-xl',
      'border-gray-kd-light hover:border-cyan-kd-dark',
      'flex flex-col justify-start',
      'p-4',
      'w-full'
      )}>
      <div className={classNames(
        'mb-4',
        ''
      )}>
         <img
          className={classNames(
            'bg-contain',
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
        {`Experiencia: ${mentor.yearsOfExperience} años`}
      </p>
      <div className={classNames(
        'flex flex-row',
        'flex-wrap',
        'justify-between',
        'mt-5',
        'w-28'
      )}>
        <a
          className={classNames(
            '',

          )}
          href={`https://github.com/${mentor.github}`}
          rel='noopener noreferrer'
          target='_blank'
          // onClick={tracker.onMentorLinkClicked('Github')}
        >
          <img
            className='w-7'
            src='/icons/social-media-gh.svg'
            alt='github-logo'
          />
        </a>
        <a
          className=''
          href={`https://www.linkedin.com/in/${mentor.linkedin}`}
          rel='noopener noreferrer'
          target='_blank'
          // onClick={tracker.onMentorLinkClicked('LinkedIn')}
        >
          <img
            className='w-7'
            src='/icons/social-media-in.svg'
            alt='linkedin-logo'
          />
        </a>
        <a
          className=''
          href={`https://twitter.com/${mentor.twitter}`}
          rel='noopener noreferrer'
          target='_blank'
          // onClick={tracker.onMentorLinkClicked('Twitter')}
        >
          <img
            className='w-7'
            src='/icons/social-media-tw.svg'
            alt='twitter-logo'
          />
        </a>
      </div>
      <div>
      {/* <div className='h-20'> */}
        <p className={classNames(
          'mt-5',
          'text-base text-gray-kd-lighter font-normal',
          {'line-clamp-3': !isExpanded},
          {'line-clamp-none': isExpanded}
        )}>
          {mentor.description}
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
        </p>
        <a
          className={classNames(
            'text-cyan-kd',
            'underline underline-offset-2',
            {'hidden': isExpanded}
          )}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          leer más
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
          mentor.skills.map((skill, index) => (
            // console.log('Skill in mentor.skills', skill)
              <Pill
                // className={classNames(
                //   ''
                // )}
                key={`skill-${index}`}
                skill={skill}
                // name={skill.name}
                // color={skill.color}
              />
            // </div>
          ))
        }
      </div>
    </div>
  )
}
