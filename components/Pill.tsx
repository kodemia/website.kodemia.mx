import classNames from 'classnames'

import { Skill } from 'types/common'
export interface Props {
  className?: string
  // color: string
  skill: Skill
}

export default function Pill ({ className, skill }: Props):JSX.Element {
  // console.log('skill name: ', skill)
  // console.log('color name: ', color)
  return (
    <div className={classNames(
      className,
      // 'bg-yellow-300',
      'box-border',
      'flex justify-center items-center',
      'py-1 px-2',
      'rounded-lg',
      `bg-${skill.color}`
    )}>
      <span className={classNames(
        'text-base text-white font-semibold'
      )}>
        {skill.name}
      </span>
    </div>
  )
}
