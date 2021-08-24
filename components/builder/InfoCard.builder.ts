
import { Builder } from '@builder.io/react'

import InfoCard from 'components/InfoCard'

const componentName = 'Bullet'

Builder.registerComponent(InfoCard, {
  name: componentName,
  inputs: [
    {
      name: 'icon',
      friendlyName: 'Icono',
      type: 'file',
      allowedFileTypes: ['jpeg', 'png', 'gif', 'svg'],
      defaultValue: 'https://kodemia.mx/icons/icon-proceso.svg'
    },
    {
      name: 'title',
      friendlyName: 'Titulo',
      type: 'string',
      defaultValue: 'Titulo'
    },
    {
      name: 'text',
      friendlyName: 'Texto',
      type: 'string',
      defaultValue: 'Texto del bullet'
    },
    {
      name: 'detail',
      friendlyName: 'Detalle',
      type: 'string',
      defaultValue: 'Este detalle es opcional'
    }
  ]
})

export default {
  componentName
}
