
import { Builder } from '@builder.io/react'

import H5 from 'components/H5'

const componentName = 'H5'

Builder.registerComponent(H5, {
  name: componentName,
  inputs: [
    {
      name: 'children',
      friendlyName: 'Texto',
      type: 'string',
      defaultValue: 'H5'
    },
    {
      name: 'isWhite',
      friendlyName: 'Blanco',
      type: 'boolean',
      defaultValue: false
    }
  ]
})

export default {
  componentName
}
