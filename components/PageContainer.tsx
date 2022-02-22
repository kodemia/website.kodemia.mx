
import classNames from 'classnames'

export interface Props {
  children: React.ReactNode
}

export default function PageContainer ({children}: Props):JSX.Element {
  return (
    <section className={classNames(
      'flex justify-center',
      'pt-20 md:pt-24',
      'px-6 md:px-16 lg:px-12',
      'pb-10 md:pb-16 '
    )}>
      <div className={classNames(
        'lg:max-w-screen-xl',
        'w-full'
      )}>
        {children}
      </div>
    </section>
  )
}
