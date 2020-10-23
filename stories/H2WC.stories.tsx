
import React from 'react'
import { Story, Meta } from '@storybook/react'

import H2WC, {Props} from '../components/H2WC'

export default {
  title: 'Base/H2-white-cursor',
  component: H2WC,
  argTypes: {
      cyanText: {
        control: 'text'
      },
      whiteText: {
          control: 'text'
      }
  }
} as Meta

const Template: Story<Props> = (args) => <H2WC {...args}/>

export const h2 = Template.bind({})
h2.args = {
    cyanText: 'Conoce la historia ',
    whiteText: 'de nuestros graduados' 
}