
import classNames from 'classnames'

export interface Props {
  children: React.ReactNode
  className: string
  isBordered?: boolean
}

export default function Card ({ children, className, isBordered }: Props):JSX.Element {
  return (
    <div className={classNames(
      'py-6 px-5',
      {
        'border border-solid rounded-small border-brand-gray-light hover:border-brand-primary': isBordered
      },
      className
    )}>
      {children}
    </div>
  )
}
