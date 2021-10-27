
import { Builder } from '@builder.io/react'

import MobileForm from 'components/Forms/MobileForm'
import icons from 'components/builder/icons'

const componentName = 'ApplyMobileForm'

Builder.registerComponent(MobileForm, {
  name: componentName,
  friendlyName: 'Apply Mobile Form',
  image: icons.form
})

export default {
  name: componentName
}
