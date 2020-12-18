
import React from 'react'
// My components
import Navbar from '../components/Navbar'
import H1 from '../components/H1'

export default function Login () {
  return (
    <div className='login'>
      <Navbar />
      <div className='columns'>
        <div className='column is-10-mobile is-offset-1-mobile is-flex is-justify-content-center'>
          <H1 text='Bienvenidos' />
        </div>
      </div>
    </div>
  )
}
