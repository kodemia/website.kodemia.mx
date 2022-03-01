
import classNames from 'classnames'

interface Option {
  label?: string
  value: string | number
}
export interface Props {
  wrapperClassName?: string
  className?: string
  label: string
  error?: string
  name: string
  register: any
  options: Array<Option>
  required?: boolean
}

export default function Select (props: Props) {
  return (
    <>
      <label className={classNames('text-brand-complementary text-brand-normal')}>
        {props.label}
      </label>
      <div className={classNames(
        props.wrapperClassName,
        'py-2 px-3 mt-2',
        'bg-brand-black-dark opacity-90',
        'text-brand-complementary',
        'rounded-small'
      )}
      >
        <select
          name={props.name}
          ref={props.register}
          required={props.required}
          className={classNames(
            'bg-brand-black-dark',
            'pr-10 w-full',
            'cursor-pointer'
          )}
        >
          {
            props.options?.map((option, index) => (
              <option
                key={`option-${option.value}-${index}`}
                value={option.value}
              >
                {option?.label || option.value}
              </option>
            ))
          }
        </select>
      </div>
      {
        props.error &&
        <p className='text-brand-error'>
          {props.error}
        </p>
      }
    </>
  )
}
