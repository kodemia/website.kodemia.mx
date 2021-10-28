
import { Builder } from '@builder.io/react'

import Button from 'components/Button'
import icons from 'components/builder/icons'

const componentName = 'Button'

Builder.registerComponent(Button, {
  name: componentName,
  image: icons.clicking,
  inputs: [
    {
      name: 'label',
      friendlyName: 'Texto',
      type: 'string',
      defaultValue: 'Button',
      required: true
    },
    {
      name: 'link',
      friendlyName: 'Url',
      type: 'string',
      required: true
    },
    {
      name: 'isPrimary',
      friendlyName: 'Es primario',
      type: 'boolean',
      defaultValue: true
    }
  ]
})

export default {
  name: componentName
}
