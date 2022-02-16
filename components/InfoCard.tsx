
import React from 'react'
import classNames from 'classnames'

import H5 from 'components/H5'
import Text from 'components/Text'

export interface Props {
  icon: string,
  title: string,
  text: string,
  detail?: string
}

export default function InfoCard ({
  icon,
  title,
  text,
  detail
}: Props):JSX.Element {
  return (
    // <div id='info-card'>
      <div className={classNames(
        // 'info-card-container',
        'box-border',
        'gap-4',
        // 'grid',
        // 'grid-cols-2',
        // 'grid-rows-2',
        'flex',
        'pt-5',
        'px-0',
        'lg:pb-4', // TODO: Comprobar comportamiento, en CSS está a 18px
        {
          // 'has-detail': detail
          'grid-rows-none lg:grid-rows-3 h-[435px] pt-5 px-0 pb-0': detail
        }
      )}>
        <div className='w-auto'>
          <img
            src={icon}
            className={classNames(
              // 'ikon',
              // 'ml-auto',
              'w-[26px]',
              'pt-2', // TODO: Comprobar comportamiento, en CSS está a 10px
              'hover:scale-110',
              // 'grid',
              // 'auto-cols-auto'
          )}/>
        </div>
        <div className='flex flex-col w-4/5'>
          <div className={classNames(
            // 'info-card-title',
            'm-0',
            // 'row-start-1 row-end-2',
            // 'grid',
            // 'auto-cols-fr'
            // 'w-4/5'
          )}>
            <H5 isWhite>
              {title}
            </H5>
          </div>
          <div className={classNames(
            // 'text'
            'h-full',
            'mt-4', // TODO: Comprobar comportamiento, en CSS está a 15px
            // 'row-start-2 row-end-3',
            // 'auto-cols-fr'
            // 'w-4/5'
          )}>
            <Text>
              {text}
            </Text>
          </div>
          {
            detail &&
              <div className={classNames(
                // 'detail'
                'items-center',
                'border',
                'border-solid',
                'border-brand-primary',
                'rounded-small',
                'text-brand-gray',
                'flex',
                'text-base',
                'font-medium',
                'mt-1', // TODO: Comprobar comportamiento, en CSS está a 5px
                'p-4'
              )}>
                {detail}
              </div>
          }
        </div>
      </div>
    // </div>
  )
}
