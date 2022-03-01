
import React from 'react'
import classNames from 'classnames'

import H5 from 'components/H5'
import Text from 'components/Text'

export interface Props {
  icon: string
  title: string
  text: string
  detail?: string
}

export default function InfoElement({ icon, title, text, detail }: Props): JSX.Element {
  return (
    <article className={classNames(
      'box-border',
      'flex',
      'gap-4',
      'pt-5 px-0 lg:pb-4',
      {
        'grid-rows-none lg:grid-rows-3 h-[435px] pt-5 px-0 pb-0': detail
      }
    )}>
      <div className='w-auto'>
        <img
          src={icon}
          className={classNames(
            'pt-2',
            'w-7',
            'hover:scale-110'
          )}
        />
      </div>
      <div className={classNames(
        'flex flex-col',
        'w-4/5'
      )}>
        <H5 isWhite>
          {title}
        </H5>
        <div className={classNames(
          'h-full',
          'mt-4'
        )}>
          <Text>
            {text}
          </Text>
        </div>
        {
          detail &&
          <div className={classNames(
            'border border-solid border-brand-primary',
            'flex items-center',
            'mt-1',
            'p-4',
            'rounded-small',
            'text-brand-gray text-base font-medium'
          )}>
            {detail}
          </div>
        }
      </div>
    </article>
  )
}
