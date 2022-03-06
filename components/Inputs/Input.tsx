
import classNames from 'classnames'

export interface Props {
  type: 'text' | 'email'
  label: string
  className?: string
  placeholder?: string
  error?: string
  name: string
  register: any
  required?: boolean
}

export default function Input (props: Props) {
  return (
    <div className='w-full'>
      <div className={classNames(
        'mb-2 font-normal',
        'text-brand-complementary text-brand-normal'
      )}
      >
        {props.label}
      </div>
      <input
        className={classNames(
          'py-2 px-3 w-full',
          'bg-brand-black-dark opacity-90',
          'text-brand-complementary placeholder:text-brand-gray-light',
          'rounded-small',
          props.className,
        )}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        ref={props.register}
        required={props.required}
      />
      {
        props.error &&
        <p className='text-brand-error'>{props.error}</p>
      }
    </div>
  )
}
