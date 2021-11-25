import classNames from "classnames";
import Link from 'next/link'

export default function BackBaseBanner () {
  return (
    <header className={classNames(
      'w-full',
      'flex flex-col justify-center',
      'bg-black-kd py-2 mt-14 px-6',
      'text-white font-sans'
      )}>
      <main
        className={classNames(
          'container',
          'flex',
          'flex-col tablet:flex-row',
          'tablet:justify-center tablet:items-center'
        )}
      >
        <img
          src="https://cdn.kodemia.mx/images/backbase/logo-backbase-kodemia.png"
          alt="Backbase + Kodemia"
          className={classNames(
            'h-6 tablet:h-8 pr-5',
            'mb-1 tablet:mb-0'
          )}
        />
        <span>
          <b className='text-cyan-kd'>Beca del 80% </b>
          Para aprender desarrollo móvil con
          <b className='text-cyan-kd'> iOS o Android&nbsp;
            <br className='tablet:hidden'/>
            <Link href='/backbase' >
              <a className='underline font-bold'>
                ¡Aplica ahora!
              </a>
            </Link>
          </b>
        </span>
      </main>
    </header>
  )
}
