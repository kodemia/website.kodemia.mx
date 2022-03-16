
import classNames from 'classnames'

import TextCursor from 'components/TextCursor'

export interface Props {
  backgroundClassNames?: string
  headerClassName?: string
  contentClassName?: string
  subTitle: string
  title: string
  hasSeparatedLines?: boolean
}

export default function PageHero (props: Props): JSX.Element {
  const titleWords = props.title.split(' ')
  const lastWord = titleWords.pop() ?? ''

  return (
    <header className={classNames(
      'flex justify-center',
      'pt-20 md:pt-24',
      'px-6 md:px-16 lg:px-12',
      'pb-14 md:pb-16',
      'h-[430px]',
      'bg-center bg-no-repeat bg-cover',
      props.headerClassName
    )}>
      <div className={classNames(
        'lg:max-w-screen-xl',
        'w-full',
        props.contentClassName
      )}>
        <h1
          className={classNames(
            'text-brand-h5 text-brand-gray-light font-medium',
            'whitespace-pre-wrap break-words',
            'pt-16 pb-4'
          )}
        >
          {props.subTitle}
        </h1>
        <h2
          className={classNames(
            'text-brand-h3 font-semibold',
            'text-brand-complementary'
          )}
        >
          { titleWords.join(' ') }
          { props.hasSeparatedLines && <br /> }
          <TextCursor>
            {lastWord}
          </TextCursor>
        </h2>
      </div>
    </header>
  )
}
