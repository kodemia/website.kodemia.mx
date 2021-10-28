
import { Builder } from '@builder.io/react'

import Navbar from 'components/Navbar'

const componentName = 'Nav Bar'

Builder.registerComponent(Navbar, {
  name: componentName
})

export default {
  componentName
}
