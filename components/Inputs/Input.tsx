
import classnames from 'classnames'

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

export default function Input(props: Props) {
  return (
    <div className='field'>
      <div className='label has-text-white has-text-weight-normal'>
        {props.label}
      </div>
      <div className='control'>
        <input
          className={classnames(
            props.className,
            'input'
          )}
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          ref={props.register}
          required={props.required}
        />
      </div>
      {
        props.error &&
        <p className='help is-danger'>{props.error}</p>
      }
    </div>
  )
}
