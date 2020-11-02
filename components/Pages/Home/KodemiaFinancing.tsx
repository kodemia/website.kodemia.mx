
import React from 'react'
// My component
import Button from '../../Button'
import H3 from '../../H3'

export default function KodemiaFinancing () {
  const data = {
    title: 'Queremos que alcances tus metas',
    section: 'Apoyo Kodemia',
    text: 'Si tus ganas de desarrollarte superan tu capacidad de pagp, en Kodemia tenemos opciones, nos interesa escucharte.'
  }
  return (
    <div>
      <H3 text={data.section} />
    </div>
  )
}
