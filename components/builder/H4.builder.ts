
import { Builder } from '@builder.io/react'

import H4 from 'components/H4'

const componentName = 'H4'

Builder.registerComponent(H4, {
  name: componentName,
  inputs: [
    {
      name: 'children',
      friendlyName: 'Texto',
      type: 'string',
      defaultValue: 'H4'
    }
  ]
})

export default {
  componentName
}
