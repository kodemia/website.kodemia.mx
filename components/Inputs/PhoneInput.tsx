
import PhoneInput from 'react-phone-input-2'
import classNames from 'classnames'
import es from 'react-phone-input-2/lang/es.json'

export interface Props {
  label: string,
  value: string,
  onChange: (event: string) => void
  error?: string
}

export default function Phone (props: Props) {
  return (
    <div>
      <div className={classNames('text-brand-complementary text-brand-normal mb-2')}>
        {props.label}
      </div>
      <PhoneInput
        alwaysDefaultMask
        defaultMask='..-....-....'
        country='mx'
        countryCodeEditable={false}
        localization={es}
        placeholder='55 3333 5555'
        preferredCountries={['mx', 'co', 'pe', 've', 'ar']}
        regions={['america']}
        buttonClass={'bg-transparent border-none phone-dropdown pl-2'}
        value={props.value}
        onChange={(phone) => props.onChange(phone)}
        inputProps={{
          autoFocus: false,
          name: 'phone',
          pattern: '^[\\+]?[(]?[0-9]{2,}[)]?[-\\s\\.]?[0-9]{2,}[-\\s\\.]?[0-9]{2,}[-\\s\\.]?[0-9]{2,}$',
          required: true,
          className: classNames(
            'bg-brand-black-dark opacity-90',
            'pr-2 pl-12 w-full py-2',
            'rounded-small',
            'text-brand-complementary'
          )
        }}
      />
      {
        props.error &&
        <p className='text-brand-error'>{props.error}</p>
      }
    </div>
  )
}
