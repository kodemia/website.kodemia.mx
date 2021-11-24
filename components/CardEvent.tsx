import React from 'react'
import classNames from 'classnames'
// My components
import H4 from 'components/H4'
import Button from 'components/Button'

export interface Props {
	name: string
	date: string
	schedule: string
	text: string
	btnLabel: string
	link: string
}

export default function Card({
	name,
	date,
	schedule,
	text,
	btnLabel,
	link
}: Props) {
	return (
		<div className={classNames(
			'border border-solid rounded-xl',
      'border-gray-kd-light hover:border-cyan-kd',
      'h-full',
			'p-4',
		)}>

      <div className={classNames('md:h-36')}>
				<H4>
					{name}
				</H4>
			</div>
			<h5 className={classNames(
        'text-cyan-kd text-h5 font-medium',
        'mt-1'
        )}
        >
				{date}
			</h5>
			<div className={classNames('my-3')}>
				<p className={classNames('text-gray-kd-light font-medium text-h5')}>
					{schedule}
				</p>
				<p className={classNames('text-gray-kd-light font-medium')}>
					{text}
				</p>
			</div>
			<Button
				isPrimary
				label={btnLabel}
				href={link}
			/>
		</div>
	)
}
