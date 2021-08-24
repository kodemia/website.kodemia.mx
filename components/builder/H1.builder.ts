
import { Builder } from '@builder.io/react'

import H1 from 'components/H1'

const componentName = 'H1'

Builder.registerComponent(H1, {
  name: componentName,
  inputs: [
    {
      name: 'children',
      friendlyName: 'Texto',
      type: 'string',
      defaultValue: 'H1'
    }
  ]
})

export default {
  componentName
}
