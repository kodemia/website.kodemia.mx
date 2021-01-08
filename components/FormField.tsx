
import React from 'react'

interface Props {
  text: string
  type?: string
  name: string
  value: string
  placeholder?: string
  callback: (name: string, value: string) => void
}

interface Target {
  target: {
    value: string
    name: string
  }
}

export default function FormField ({ text, type = 'text', name, value, placeholder, callback }: Props) {
  const handlerInput = ({ target: { value, name }}:Target) => {
    callback(name, value)
  }
  return (
    <div className='form-field'>
      <label className='label label-login'>{text}</label>
      <input
        className='input input-login'
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handlerInput}
      />
    </div>
  )
}
