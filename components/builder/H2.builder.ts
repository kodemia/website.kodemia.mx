
import { Builder } from '@builder.io/react'

import H2 from 'components/H2'

const componentName = 'H2'

Builder.registerComponent(H2, {
  name: componentName,
  inputs: [
    {
      name: 'children',
      friendlyName: 'Texto',
      type: 'string',
      defaultValue: 'H2'
    },
    {
      name: 'isCyan',
      friendlyName: 'cyan',
      type: 'boolean',
      defaultValue: false
    }
  ]
})

export default {
  componentName
}
