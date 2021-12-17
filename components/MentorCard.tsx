import React from 'react'
import classNames from 'classnames'

import H4 from 'components/H4'

import { Mentor } from 'types/common'
import * as tracker from 'lib/tracker'

export interface Props {
  className?: string
  mentor: Mentor
}


export default function MentorCard ({ mentor, className }: Props) {
  // console.log('mentor: ', mentor)
  return (
    <div className={classNames(
      className,
      'border border-solid rounded-xl',
      'border-gray-kd-light hover:border-cyan-kd-dark',
      'flex flex-col justify-between',
      'h-56',
      'mb-4',
      'p-4',
      'w-full'
    )}>
      <div>
         <img
          className={classNames(
            // 'h-56',
            'cover siz',
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
        'text-base text-cyan-kd opacity-80',
        ''
      )}>
        {`${mentor.jobTitle} en ${mentor.companyName}`}
      </p>
      <p>
        {mentor.experience}
      </p>
      <div>
        <a
          className=''
          href={`https://github.com/${mentor.github}`}
          rel='noopener noreferrer'
          target='_blank'
          // onClick={tracker.onMentorLinkClicked('Github')}
        >
          <img
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
            src='/icons/social-media-tw.svg'
            alt='twitter-logo'
          />
        </a>
      </div>
      <p>{mentor.description}</p>
      <span>
        Skills
      </span>
      <div>
        {
          mentor.skills.map((skill, index) => (
            console.log('SKILL: ', skill)
            // <div
            //   className='bg-red-500'
            //   key={`skill-${index}`}
            //   >
            //   {skill.name}
            // </div>
          ))
        }
      </div>
    </div>
  )
}
