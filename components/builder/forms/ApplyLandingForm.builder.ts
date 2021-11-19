
import { Builder } from '@builder.io/react'
//TODO:  cambiarlo por ApplyForm
import ApplyLandingForm from 'components/Forms/ApplyLandingForm'
import icons from 'components/builder/icons'

const componentName = 'ApplyLandingForm'

Builder.registerComponent(ApplyLandingForm, {
  name: componentName,
  friendlyName: 'Apply Form',
  image: icons.form
})

export default {
  name: componentName
}
