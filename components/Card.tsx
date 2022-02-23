
import classNames from 'classnames'

export interface Props {
  children: React.ReactNode
  className: string
}

export default function Card ({ children, className }: Props):JSX.Element {
  return (
    <div className={classNames(
      'border border-solid rounded-small',
      'border-brand-gray-light hover:border-brand-primary',
      'py-6 px-5',
      className
    )}>
      {children}
    </div>
  )
}
