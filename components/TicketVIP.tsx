
import classNames from 'classnames'
import QRCode from 'react-qr-code'

type Props = {
  name: string
  invitationId: string
}

export default function TicketVIP(props: Props) {
  return (
    <figure className='relative'>
      <img
        src="https://cdn.kodemia.mx/images/invitacion/ticket.svg"
        alt="ticket"
        className='tablet:px-10 hidden tablet:block'
      />
      <img
        src="https://cdn.kodemia.mx/images/invitacion/ticket-vertical.svg"
        alt="ticket vertical"
        className='tablet:hidden max-h-700px'
      />
      <div className={classNames(
        'absolute tablet:top-0 top-5',
        'h-full w-full',
        'tablet:px-32 tablet:py-10 px-10 pt-16 pb-28',
      )}>
        <div className={classNames(
          'h-full',
          'flex flex-col tablet:flex-row',
          'tablet:pt-0 tablet:pb-0'
        )}>
          <figure className={classNames(
              'relative',
              'flex flex-col justify-center items-center',
              'w-full tablet:w-2/3',
              'h-1/3 tablet:h-full',
          )}>
            <p className={classNames(
                'text-8dot5xl tablet:text-9xl text-center',
                'bg-clip-text text-transparent',
                'bg-gradient-to-t from-white via-black-kd-light to-white'
            )}>
              VIP
            </p>

            <p className={classNames(
                'absolute tablet:top-1/3 w-full tablet:ml-2',
                'bg-black-kd',
                'text-center',
                'tablet:tracking-even-wider tracking-spaced',
                'uppercase text-xl',
                'leading-5',
                '-mt-3 tablet:mt-0'
            )}>
              KODEDAY
            </p>
            <p className={classNames(
              'hidden tablet:block',
              'text-center uppercase',
              'tracking-spaced ',
              'w-full'
            )}>
              {props.name}
            </p>
          </figure>

          <div className={classNames(
              'tablet:hidden',
              'flex',
              'h-1/3',
              'text-xl text-center uppercase',
              'justify-center items-center',
              'tracking-widest'
          )}>
            {props.name}
          </div>

          <figure
            className='mx-auto my-auto'
          >
            <QRCode
              value={`https://plataforma.kodemia.mx/checkin/${props.invitationId}`}
              bgColor='#181818'
              fgColor='#00FFFF'
              size={120}
            />
          </figure>
        </div>
      </div>

    </figure>
  )
}
