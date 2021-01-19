
import classnames from 'classnames'

export interface Props {
  className?: string
  error?: string
  label: string
  name: string
  placeholder?: string
  register: any
  required: boolean
  rows?: number
}

export default function TextArea (props: Props) {
  return (
    <div className='field'>
      <div className='label has-text-white has-text-weight-normal'>
        {props.label}
      </div>
      <div className='control'>
        <textarea
          className={classnames(
            props.className,
            'textarea',
            'has-fixed-size'
          )}
          name={props.name}
          ref={props.register}
          rows={props.rows || 2}
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
