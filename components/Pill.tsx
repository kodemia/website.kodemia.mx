import classNames from 'classnames'

import { Skill } from 'types/common'
import MentorSkills from 'config/mentor-skills'

export interface Props {
  className?: string
  skill: Skill
}

export default function Pill ({ className, skill }: Props):JSX.Element {
  const colorSkill = MentorSkills.find(
    MentorSkills => {
      return MentorSkills.name === skill.name
    }
  )
    return (
      <div className={classNames(
        className,
        'box-border',
        'flex justify-center items-center',
        'py-1 px-2',
        'rounded-lg',
        `bg-${colorSkill?.color}`
      )}>
        <span className={classNames(
          'text-sm tablet:text-base',
          'text-white',
          'font-semibold'
        )}>
          {skill.name}
        </span>
      </div>
  )
}
