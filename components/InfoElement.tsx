
import React from 'react'
import classNames from 'classnames'

import Card from 'components/Card'
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
      'columns-2',
      'gap-x-5',
      'content-between',
      {
        'grid-rows-none lg:grid-rows-3 pt-5 mb-5 lg:mb-0 px-0 pb-0': detail
        // '[h-435px]'
      }
    )}>
      <div className={classNames(
        'col-start-1',
        'row-start-1',
        'col-span-1',
        'row-span-2',
        'w-auto',
        'border border-dotted border-yellow-500'
      )}>
        <img
          src={icon}
          className={classNames(
            'border border-dashed border-red-500',
            'pt-2',
            'w-7',
            'hover:scale-110'
          )}
        />
      </div>
      <div className={classNames(
        'col-start-2',
        'row-start-1',
        'col-span-2'
      )}>
        <H5 isWhite>
          {title}
        </H5>
        <div className={classNames(
          // 'h-full',
          'mt-4'
        )}>
          <Text>
            {text}
          </Text>
        </div>
      </div>
        {
          detail &&
          <div className={classNames(
            'border border-solid border-brand-primary',
            'box-border',
            'col-start-1',
            'row-start-2',
            'col-span-3',
            'flex items-center',
            'h-full',
            'mt-5',
            // 'mb-5',
            'p-4',
            'rounded-small',
            'text-brand-gray text-base font-medium',
            'w-full'
          )}>
            {detail}
          </div>
        }
    </article>
  )
}
