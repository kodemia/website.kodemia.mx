
import { Builder } from '@builder.io/react'

import H3 from 'components/H3'

const componentName = 'H3'

Builder.registerComponent(H3, {
  name: componentName,
  inputs: [
    {
      name: 'children',
      friendlyName: 'Texto',
      type: 'string',
      defaultValue: 'H3',
      description: 'Si este valor es establecido se ignorara los otros textos'
    },
    {
      name: 'cyanText',
      friendlyName: 'Texto en cyan',
      type: 'string',
      defaultValue: 'texto en cyan',
      description: 'Coloca aqui el texto que quieres que sea cyan'
    },
    {
      name: 'whiteText',
      friendlyName: 'Texto en blanco',
      type: 'string',
      defaultValue: 'texto en blanco',
      description: 'Coloca aqui el texto que quieres que sea blanco'
    },
    {
      name: 'isFirstCyan',
      friendlyName: 'Primero el cyan',
      type: 'boolean',
      defaultValue: false,
      description: 'Coloca el texto cyan al principio'
    }
  ]
})

export default {
  componentName
}
