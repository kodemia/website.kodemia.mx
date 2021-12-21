import classNames from 'classnames'

import { Skill } from 'types/common'

export interface Props {
  className?: string
  skill: Skill
}

export default function Pill ({ className, skill }: Props) {
  console.log('skill: ', skill)
  return (
    <div className={classNames(
      className,
      // 'align-middle',
      'bg-cyan-kd-dark',
      'h-7',
      'rounded-lg',
      'text-center',
      'w-full'
    )}>
      <span className={classNames(
        // 'align-middle',
        'text-base text-white font-semibold'
      )}>
        {skill.name}
      </span>
    </div>
  )
}
