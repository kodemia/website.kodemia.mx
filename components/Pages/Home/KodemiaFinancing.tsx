
import React from 'react'
// My component
import Button from '../../Button'
import H2 from '../../H2'
import H3 from '../../H3'

export default function KodemiaFinancing () {
  const data = {
    title: 'Queremos que alcances ',
    keywords: ' tus metas',
    section: 'Apoyo Kodemia',
    text: 'Si tus ganas de desarrollarte superan tu capacidad de pago, en Kodemia tenemos opciones, nos interesa escucharte.'
  }

  return (
    <div className='kodemia-financing'>
      <div className='card-container'>
        <H3 text={data.section} />
        <div className='title-container'>
          <H2 whiteText={data.title} cyanText={data.keywords} />
        </div>
        <p className='text'>{data.text}</p>
        <div className='btn-container'>
          <Button isPrimary label='Conoce más' />
        </div>
      </div>
    </div>
  )
}
