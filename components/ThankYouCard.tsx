import classNames from 'classnames'

import PageSection from 'components/PageSection'
import Cursor from 'components/TextCursor'
import H3 from 'components/H3'

interface Props {
  children?: React.ReactNode
  text?: string
}

export default function ThankyouCard({ children, text }: Props): JSX.Element {

  const description = !text ? 'Te contactaremos lo más \n pronto posible' : text

  return (
    <PageSection
      sectionClassName='bg-brand-black h-screen'
      contentClassName=' my-auto'
    >
      <div className={classNames(
        'bg-brand-black-light',
        'flex flex-col items-center justify-center',
        'rounded-wide',
        'px-6 py-9 sm:mx-auto',
        'sm:w-2/3 lg:w-2/4',
      )}>
        <div className=' mb-12 text-center'>
          <H3>
            <span className='text-brand-primary'>¡Muchas gracias</span> por
            <br />
            registrarte<Cursor white>!</Cursor>
          </H3>
        </div>
        <div className='text-brand-gray-light text-center whitespace-pre-line sm:w-80'>
          {description}
        </div>
        {children &&
          <div className='mt-12'>
            {children}
          </div>
        }
      </div>
    </PageSection>
  )
}
