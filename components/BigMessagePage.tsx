import classNames from 'classnames'

import PageSection from 'components/PageSection'

interface Props {
  children?: React.ReactNode
}

export default function BigMessagePage({ children }: Props): JSX.Element {
  return (
    <PageSection
      sectionClassName='bg-brand-black h-screen'
      contentClassName='my-auto'
    >
      <div className={classNames(
        'bg-brand-black-light',
        'flex flex-col items-center justify-center',
        'rounded-wide',
        'px-6 py-9 sm:mx-auto',
        'sm:w-2/3 lg:w-2/4',
      )}>
        {children}
      </div>
    </PageSection>
  )
}
