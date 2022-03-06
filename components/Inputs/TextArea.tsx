
import classNames from 'classnames'

export interface Props {
  className?: string
  error?: string
  label: string
  name: string
  placeholder?: string
  register: any
  required?: boolean
  rows?: number
}

export default function TextArea (props: Props) {
  return (
    <div className='w-full'>
      <div className={classNames(
        'mb-2 font-normal',
        'text-brand-complementary text-brand-normal'
      )}>
        {props.label}
      </div>
      <textarea
        className={classNames(
          'py-2 px-3 w-full',
          'bg-brand-black-dark opacity-90',
          'text-brand-complementary placeholder:text-brand-gray-light',
          'rounded-small',
          props.className,
        )}
        name={props.name}
        ref={props.register}
        rows={props.rows || 2}
        required={props.required}
      />
      {
        props.error &&
        <p className='text-brand-error'>{props.error}</p>
      }
    </div>
  )
}
