
import { Builder } from '@builder.io/react'

import SimpleBulletList from "components/SimpleBulletList"
import icons from 'components/builder/icons'

const componentName = 'Bullets'

Builder.registerComponent(SimpleBulletList, {
  name: componentName,
  image: icons.bullets,
  inputs: [
    {
      name: 'items',
      friendlyName: 'Bullets',
      type: 'list',
      defaultValue: [ 'uno', 'dos', 'tres' ],
      subFields: [
        {
          name: 'text',
          type: 'string'
        }
      ]
    },
  ]
})

export default {
  name: componentName
}



