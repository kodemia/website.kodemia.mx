
import classnames from 'classnames'

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
  required: boolean
}


export default function Select (props: Props) {
  return (
    <div className='field'>
      <label className='label has-text-white has-text-weight-normal'>
        {props.label}
      </label>
      <div className='control'>
        <div className={classnames(
          props.wrapperClassName,
          'select'
        )}
        >
          <select
            name={props.name}
            ref={props.register}
            required={props.required}
          >
            {
              props.options?.map((option, index) => (
                <option
                  key={`option-${option.value}-${index}`}
                  value={option.value}
                >
                  { option?.label || option.value }
                </option>
              ))
            }
          </select>
        </div>
      </div>
      {
        props.error &&
          <p className='help is-danger'>
            {props.error}
          </p>
      }
    </div>
  )
}
