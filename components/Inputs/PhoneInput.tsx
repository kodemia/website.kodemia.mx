
import PhoneInput from 'react-phone-input-2'
import es from 'react-phone-input-2/lang/es.json'

export interface Props {
  label: string,
  value: string,
  onChange: (event: string) => void
  error?: string
}

export default function Phone (props: Props) {
  return (
    <div className='field'>
      <div className='label has-text-white has-text-weight-normal'>
        {props.label}
      </div>
      <div className='control'>
        <PhoneInput
          alwaysDefaultMask
          defaultMask='..-....-....'
          country='mx'
          countryCodeEditable={false}
          localization={es}
          placeholder='55 3333 5555'
          preferredCountries={['mx', 'co', 'pe', 've', 'ar']}
          regions={['america']}
          buttonClass='phone-dropdown'
          value={props.value}
          onChange={(phone) => props.onChange(phone)}
          inputProps={{
            autoFocus: false,
            name: 'phone',
            pattern: '^[\\+]?[(]?[0-9]{2,}[)]?[-\\s\\.]?[0-9]{2,}[-\\s\\.]?[0-9]{2,}[-\\s\\.]?[0-9]{2,}$',
            required: true,
            className: 'input'
          }}
        />
      </div>
      {
        props.error &&
          <p className='help is-danger'>{props.error}</p>
      }
    </div>
  )
}
