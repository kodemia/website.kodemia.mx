
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
      <div className={classNames(
        'mb-2 font-normal ',
        'text-brand-complementary text-brand-normal'
        )}
        >
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
        buttonClass={classNames(
          'phone-dropdown',
          'pl-2 bg-transparent border-none',
          'text-brand-black'
        )}
        value={props.value}
        onChange={(phone) => props.onChange(phone)}
        inputProps={{
          autoFocus: false,
          name: 'phone',
          pattern: '^[\\+]?[(]?[0-9]{2,}[)]?[-\\s\\.]?[0-9]{2,}[-\\s\\.]?[0-9]{2,}[-\\s\\.]?[0-9]{2,}$',
          required: true,
          className: classNames(
            'pr-2 pl-12 w-full py-2',
            'bg-brand-black-dark opacity-90',
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
