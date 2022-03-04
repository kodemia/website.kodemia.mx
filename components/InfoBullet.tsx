
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
      'grid',
      'grid-cols-[auto_1fr]',
      'grid-rows-[auto_1fr]',
      'gap-x-5',
      'content-between'
    )}>
      <div className={classNames(
        'col-start-1',
        'row-start-1',
        'col-span-1',
        'row-span-2',
        'w-auto'
      )}>
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
        'col-start-2',
        'row-start-1',
        'col-span-2',
        'h-full'
      )}>
        <H5 isWhite>
          {title}
        </H5>
      </div>
      <div className={classNames(
        'col-start-2',
        'row-start-2',
        'col-span-2',
        'mt-5'
      )}>
        <Text>
          {text}
        </Text>
      </div>
        {
          detail &&
          <div className={classNames(
            'border border-solid border-brand-primary',
            'col-start-1',
            'row-start-3',
            'col-span-3',
            'flex items-center',
            'h-44',
            'mt-5',
            'p-4',
            'rounded-small',
            'text-brand-gray-light text-base font-medium'
          )}>
            {detail}
          </div>
        }
    </article>
  )
}
