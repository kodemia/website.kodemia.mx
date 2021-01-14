
import classnames from 'classnames'

export interface Props {
  wrapperClassName?: string
  className?: string
  label: string
  error?: string
  name: string
  register: any
}

export default function (props: Props) {
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
          <select name={props.name} ref={props.register}>
            <option> uno </option>
            <option> dos </option>
            <option> tres </option>
            <option> cuatro </option>
            <option> cinco </option>
            <option> seis </option>
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
